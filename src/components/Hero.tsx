import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import gsap from "gsap";
import { ArrowRight, Cpu, Zap, Code } from "lucide-react";
import ScrambleText from "./ScrambleText";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Particle effect
    const particlesContainer = containerRef.current;
    if (!particlesContainer) return;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute w-1 h-1 bg-accent-cyan/20 rounded-full pointer-events-none";
      particlesContainer.appendChild(particle);

      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });

      gsap.to(particle, {
        x: "+=" + (Math.random() * 200 - 100),
        y: "+=" + (Math.random() * 200 - 100),
        duration: 10 + Math.random() * 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;

      gsap.to(glowRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 1.5,
        ease: "power2.out"
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 md:px-8 pt-32 shrink-0 pb-12">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent-teal/10 rounded-full blur-[120px] pointer-events-none" />

      <div ref={glowRef} className="fixed top-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-accent-cyan/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0 opacity-50" />

      {/* Immersive Grid */}
      <div className="grid-bg" />

      <div className="grid lg:grid-cols-12 gap-12 items-center w-full max-w-7xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-12"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full mb-6 md:mb-8">
            <div className="w-1.5 h-1.5 bg-accent-teal rounded-full animate-pulse"></div>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">Next-Gen Automation Active</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-[120px] font-bold tracking-tighter mb-6 md:mb-8 leading-[0.85] md:leading-[0.85]"
          >
            <ScrambleText text="We build" delay={500} scrambleOnHover={false} /> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-accent-cyan to-white/30">
              <ScrambleText text="AI-powered" delay={900} scrambleOnHover={false} />
            </span> <br />
            <ScrambleText text="systems that" delay={1300} scrambleOnHover={false} /> <span className="italic font-light"><ScrambleText text="scale." delay={1700} scrambleOnHover={false} /></span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/50 mb-12 max-w-xl font-light leading-relaxed"
          >
            Architecting high-performance autonomous agents and custom enterprise software for the intelligence era.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent-cyan text-background px-10 py-5 rounded-full font-bold text-sm tracking-tight hover:shadow-[0_10px_30px_rgba(0,209,255,0.2)] transition-all cursor-pointer"
            >
              Start a Project
            </motion.button>
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-neutral-800" />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-background bg-accent-cyan flex items-center justify-center text-[10px] font-bold text-background">
                  +5
                </div>
              </div>
              <span className="text-xs text-white/40 font-medium">Trusted by forward-thinking teams</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
