import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Smartphone, Mail, Settings, ChevronRight, X, ShoppingCart } from "lucide-react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const useCases = [
  {
    title: "E-Commerce AI Integration",
    category: "AI / LLM",
    icon: <ShoppingCart className="text-accent-cyan" />,
    short: "Boosted sales by 30% with personalized AI product recommendations.",
    long: "Integrated a custom LLM into an existing e-commerce platform to provide hyper-personalized product recommendations, intelligent search, and a conversational shopping assistant.",
    stats: ["+30% Sales", "Smart Search", "Personalized UI"]
  },
  {
    title: "AI Customer Support Bot",
    category: "Automation",
    icon: <Mail className="text-accent-cyan" />,
    short: "Reduced ticket response time by 80% for a Fintech startup.",
    long: "We built a custom RAG-based support agent that integrates with Zendesk. It handles 90% of routine queries with human-like accuracy, escalating complex cases to agents.",
    stats: ["80% Reduction", "24/7 Availability", "95% Satisfaction"]
  },
  {
    title: "Internal AI Assistant",
    category: "Knowledge Management",
    icon: <Settings className="text-accent-teal" />,
    short: "Unified company documentation into a single intelligent portal.",
    long: "Developed a secure internal assistant that indexes thousands of Notion pages, Slack history, and GitHub repos to answer employee questions instantly.",
    stats: ["Smart Search", "Secure SOC2", "Custom Integrations"]
  },
  {
    title: "Workflow Automation System",
    category: "Operations",
    icon: <Smartphone className="text-accent-violet" />,
    short: "Automated manual data entry between legacy CRM and Shopify.",
    long: "Eliminated 20 hours of manual labor per week by syncing inventory and order data across multiple platforms using custom TypeScript nodes in n8n.",
    stats: ["-20h/week", "Zero Errors", "Live Sync"]
  }
];

export default function UseCases() {
  const [selected, setSelected] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && wrapperRef.current) {
      Draggable.create(containerRef.current, {
        type: "x",
        bounds: wrapperRef.current,
        edgeResistance: 0.65,
      });
    }
  }, []);

  return (
    <section id="work" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="mb-10">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-accent-cyan font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
        >
          Practical Impact
        </motion.span>
        <div className="flex items-center justify-between">
          <h2 className="font-display text-4xl md:text-6xl font-bold">Use <span className="font-light italic text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">Cases</span></h2>
          <div className="hidden md:flex gap-2">
            <span className="text-white/40 font-mono text-xs uppercase tracking-widest pt-4">&lt; Drag to explore &gt;</span>
          </div>
        </div>
      </div>

      <div ref={wrapperRef} className="overflow-hidden cursor-grab active:cursor-grabbing pb-8 px-4 md:px-12 -mx-4 md:-mx-12">
        <div ref={containerRef} className="flex gap-6 w-max">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              layoutId={`card-${index}`}
              onClick={() => setSelected(index)}
              className="w-[85vw] sm:w-[500px] shrink-0 group glass p-8 rounded-3xl cursor-pointer hover:border-accent-cyan/20 transition-all overflow-hidden relative"
            >
            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight className="text-accent-cyan/40" />
            </div>
            
            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent-cyan/30 transition-colors">
              {useCase.icon}
            </div>
            
            <span className="text-xs font-mono text-white/40 mb-2 block uppercase tracking-widest">{useCase.category}</span>
            <h3 className="text-2xl font-bold mb-4">{useCase.title}</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {useCase.short}
            </p>

            <div className="flex flex-wrap gap-2">
              {useCase.stats.slice(0, 2).map((stat) => (
                <span key={stat} className="text-[10px] bg-white/5 px-2 py-1 rounded-md text-accent-cyan border border-white/5">
                  {stat}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[60]"
            />
            <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none">
              <motion.div 
                layoutId={`card-${selected}`}
                className="glass w-full max-w-2xl rounded-3xl p-8 md:p-12 pointer-events-auto relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-cyan via-accent-teal to-accent-violet" />
                
                <button 
                  onClick={() => setSelected(null)}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10">
                  {useCases[selected].icon}
                </div>

                <div className="mb-6 md:mb-8">
                  <span className="text-xs md:text-sm font-mono text-accent-teal mb-2 block uppercase tracking-widest">{useCases[selected].category}</span>
                  <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">{useCases[selected].title}</h3>
                  <p className="text-base md:text-lg text-white/70 leading-relaxed">
                    {useCases[selected].long}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4">
                  {useCases[selected].stats.map((stat) => (
                    <div key={stat} className="glass p-3 md:p-4 rounded-xl text-center border border-white/5">
                      <span className="text-xs md:text-sm font-bold text-accent-cyan">{stat}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
