import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { Search, PenTool, Braces, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discover",
    description: "We deep-dive into your business workflows to identify high-impact automation opportunities.",
    icon: <Search className="text-accent-cyan" />
  },
  {
    id: "02",
    title: "Design",
    description: "Architecting a custom solution that fits seamlessly into your existing tech stack.",
    icon: <PenTool className="text-accent-teal" />
  },
  {
    id: "03",
    title: "Build",
    description: "Rapid development using state-of-the-art AI frameworks and robust coding standards.",
    icon: <Braces className="text-accent-violet" />
  },
  {
    id: "04",
    title: "Deploy",
    description: "Continuous monitoring and optimization to ensure your systems evolve as you scale.",
    icon: <Rocket className="text-accent-cyan" />
  }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100,
    restDelta: 0.001
  });

  return (
    <section id="process" ref={containerRef} className="py-32 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
          >
            The Pipeline
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold tracking-tighter"
          >
            From <span className="text-accent-cyan">Vision</span> to Production
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-white/10">
            <motion.div 
              style={{ scaleY }}
              className="w-full h-full bg-gradient-to-b from-accent-cyan via-accent-teal to-accent-violet origin-top"
            />
          </div>

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex flex-row items-start md:items-center w-full">
                
                {/* Desktop Left Content */}
                <div className="hidden md:block flex-1 text-right pr-8 lg:pr-16">
                  {index % 2 === 0 && (
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8 }}
                    >
                      <span className="font-display text-2xl font-bold text-white/20 mb-2 block">{step.id}</span>
                      <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                      <p className="text-white/50 leading-relaxed text-base">
                        {step.description}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Icon Hub */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="z-10 w-16 h-16 rounded-2xl glass flex items-center justify-center relative group shrink-0"
                >
                  <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  {step.icon}
                </motion.div>

                {/* Right / Mobile Content */}
                <div className="flex-1 text-left pl-8 lg:pl-16 pt-1 md:pt-0">
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={index % 2 === 0 ? "block md:hidden" : "block"}
                  >
                    <span className="font-display text-2xl font-bold text-white/20 mb-1 md:mb-2 block">{step.id}</span>
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{step.title}</h3>
                    <p className="text-white/50 leading-relaxed text-sm md:text-base">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
