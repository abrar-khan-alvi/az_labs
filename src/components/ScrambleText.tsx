import { useEffect, useState, useRef } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

interface ScrambleTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  scrambleOnHover?: boolean;
}

export default function ScrambleText({ 
  text, 
  speed = 30, 
  delay = 0,
  className = "",
  scrambleOnHover = false
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startScramble = (initialDelay: number) => {
    if (isScrambling) return;
    setIsScrambling(true);
    let iteration = 0;
    
    setTimeout(() => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      
      intervalRef.current = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              if (letter === " ") return " ";
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsScrambling(false);
          setDisplayText(text);
        }

        iteration += 1 / 3;
      }, speed);
    }, initialDelay);
  };

  useEffect(() => {
    startScramble(delay);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, speed, delay]);

  return (
    <span 
      className={`inline-block ${className}`}
      onMouseEnter={() => {
        if (scrambleOnHover && !isScrambling) {
          startScramble(0);
        }
      }}
    >
      {displayText}
    </span>
  );
}
