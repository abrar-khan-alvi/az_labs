import { motion } from "motion/react";
import { Bot, Network } from "lucide-react";

const tools = [
  { name: "AI Agents", icon: <Bot className="w-8 h-8 sm:w-10 sm:h-10 text-accent-cyan shrink-0" /> },
  { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "React.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Django", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg", invert: true },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "AWS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", invert: true },
  { name: "n8n", icon: <Network className="w-8 h-8 sm:w-10 sm:h-10 text-rose-500 shrink-0" /> },
  { name: "OpenAI", img: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg", invert: true },
  { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" }
];

export default function TechStack() {
  const repeatedTools = [...tools, ...tools, ...tools, ...tools];

  return (
    <section className="py-8 sm:py-12 border-y border-white/5 bg-background overflow-hidden relative flex items-center">
      {/* Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Marquee Container */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {repeatedTools.map((tool, index) => (
          <div 
            key={`${tool.name}-${index}`} 
            className="flex items-center gap-3 sm:gap-4 px-6 sm:px-12 opacity-50 hover:opacity-100 transition-opacity duration-300"
          >
            {tool.icon && tool.icon}
            {tool.img && (
              <img 
                src={tool.img} 
                alt={tool.name} 
                className={`h-6 sm:h-10 w-auto object-contain shrink-0 ${tool.invert ? 'brightness-0 invert' : ''}`} 
                referrerPolicy="no-referrer"
              />
            )}
            <span className="text-sm sm:text-base font-bold font-mono tracking-widest uppercase whitespace-nowrap text-white/80">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
