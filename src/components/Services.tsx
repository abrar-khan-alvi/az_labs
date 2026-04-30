import { motion } from "motion/react";
import { Bot, Workflow, Layout, Database, ChevronRight, Mail, Zap, Terminal, Layers, Code, Share2 } from "lucide-react";
import { useState } from "react";

const services = [
  {
    id: "ai",
    title: "AI & Automation",
    description: "Intelligent agents that handle customer support, data processing, and complex decision-making workflows without human intervention.",
    icon: <Bot className="text-accent-cyan" size={32} />,
    items: ["AI Agents", "RAG Systems", "Custom LLMs", "n8n / Zapier Flows"],
    color: "from-accent-cyan/20 to-transparent"
  },
  {
    id: "software",
    title: "Custom Software",
    description: "Bespoke digital foundations designed for performance. From high-scale web applications to complex backend ecosystems.",
    icon: <Layout className="text-accent-teal" size={32} />,
    items: ["Next.js Web Apps", "Enterprise Backends", "Mobile Solutions", "API Architectures"],
    color: "from-accent-teal/20 to-transparent"
  },
  {
    id: "data",
    title: "Data Systems",
    description: "Converting raw data into competitive advantages with intelligent architecture and real-time processing pipelines.",
    icon: <Database className="text-accent-violet" size={32} />,
    items: ["Vector Databases", "Real-time Analytics", "ETL Pipelines", "Data Strategy"],
    color: "from-accent-violet/20 to-transparent"
  }
];

export default function Services() {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="mb-16">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-accent-cyan font-mono text-sm tracking-[0.3em] uppercase mb-4 block"
        >
          Capabilities
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-6xl font-bold mb-6"
        >
          Our Core <span className="italic font-light">Expertise</span>
        </motion.h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setActive(index)}
              className={`group p-8 rounded-3xl transition-all duration-500 cursor-pointer ${
                active === index 
                ? "glass ring-1 ring-white/20" 
                : "hover:bg-white/5"
              }`}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-2xl bg-white/5 transition-transform duration-500 ${active === index ? 'scale-110 rotate-3' : ''}`}>
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center justify-between">
                    {service.title}
                    <ChevronRight className={`transition-transform duration-500 ${active === index ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} />
                  </h3>
                  <p className="text-white/60 leading-relaxed max-w-md">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="relative h-auto min-h-[400px] sm:min-h-[500px] lg:h-[600px] rounded-[30px] md:rounded-[40px] overflow-hidden glass p-1">
          <motion.div 
            key={active}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`absolute inset-0 bg-gradient-to-br ${services[active].color} transition-colors duration-1000`}
          />
          
          <div className="relative h-full flex flex-col justify-center p-6 md:p-12">
             <motion.div
               key={`content-${active}`}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="space-y-6 md:space-y-8"
             >
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                 {services[active].items.map((item, i) => (
                   <motion.div 
                     key={item}
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: i * 0.1 }}
                     className="glass p-3 md:p-4 rounded-xl md:rounded-2xl flex items-center gap-3 group/item border border-white/5 hover:border-white/20 transition-all"
                   >
                     <div className="w-2 h-2 rounded-full bg-accent-cyan" />
                     <span className="text-sm font-medium">{item}</span>
                   </motion.div>
                 ))}
               </div>
               
               {/* Visual Mockup representation */}
               <div className="mt-8 md:mt-12 w-full aspect-[4/3] sm:aspect-video rounded-2xl glass border border-white/10 relative group overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 to-accent-teal/20 opacity-40" />
                  
                  <div className="flex items-center justify-center h-full">
                    {active === 0 && (
                      <div className="relative w-full h-full flex items-center justify-around px-2 sm:px-8">
                        {/* Node 1: Inlet */}
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="w-12 h-12 sm:w-16 sm:h-16 glass rounded-xl flex items-center justify-center relative z-10 shrink-0"
                        >
                          <Mail className="text-accent-cyan w-5 h-5 sm:w-6 sm:h-6" />
                          <div className="absolute inset-[-4px] border border-accent-cyan/30 rounded-xl animate-pulse" />
                        </motion.div>

                        {/* Connection 1 */}
                        <div className="flex-1 min-w-[20px] h-px bg-white/10 relative">
                          <motion.div 
                            initial={{ left: "0%" }}
                            animate={{ left: "100%" }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-accent-cyan rounded-full blur-sm"
                          />
                        </div>

                        {/* Node 2: AI Core */}
                        <motion.div 
                          className="w-16 h-16 sm:w-24 sm:h-24 glass rounded-2xl sm:rounded-3xl flex items-center justify-center relative z-10 shrink-0"
                        >
                          <Bot className="text-accent-teal w-6 h-6 sm:w-10 sm:h-10" />
                          <div className="absolute inset-0 border-2 border-accent-teal/20 rounded-2xl sm:rounded-3xl animate-ping opacity-20" />
                        </motion.div>

                        {/* Connection 2 */}
                        <div className="flex-1 min-w-[20px] h-px bg-white/10 relative">
                          <motion.div 
                            initial={{ left: "0%" }}
                            animate={{ left: "100%" }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
                            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-accent-violet rounded-full blur-sm"
                          />
                        </div>

                        {/* Node 3: Result */}
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="w-12 h-12 sm:w-16 sm:h-16 glass rounded-xl flex items-center justify-center relative z-10 shrink-0"
                        >
                          <Zap className="text-accent-violet w-5 h-5 sm:w-6 sm:h-6" />
                        </motion.div>

                        {/* Labels */}
                        <div className="absolute bottom-4 sm:bottom-10 left-4 sm:left-8 text-[6px] sm:text-[8px] font-mono tracking-widest text-white/20">INPUT::WEBHOOK</div>
                        <div className="absolute top-4 sm:top-10 left-1/2 -translate-x-1/2 text-[6px] sm:text-[8px] font-mono tracking-widest text-accent-teal/50">PROCESSING::AGENT_V4</div>
                        <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-8 text-[6px] sm:text-[8px] font-mono tracking-widest text-white/20">ACTION::DEPLOYED</div>
                      </div>
                    )}
                    {active === 1 && (
                      <div className="relative w-full h-full flex flex-col items-center justify-center p-6 md:p-10">
                        {/* Browser Container */}
                        <motion.div 
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          className="w-full flex flex-col rounded-xl overflow-hidden glass border border-white/10 shadow-2xl"
                        >
                          {/* Browser Bar */}
                          <div className="w-full h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-1.5 shrink-0">
                            <div className="w-2 h-2 rounded-full bg-accent-violet/30" />
                            <div className="w-2 h-2 rounded-full bg-white/10" />
                            <div className="w-2 h-2 rounded-full bg-accent-cyan/30" />
                          </div>
                          
                          {/* Screen Content */}
                          <div className="p-4 space-y-4 flex-grow">
                            <div className="flex gap-4">
                              <motion.div 
                                animate={{ width: ["10%", "60%", "10%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="h-2 bg-accent-cyan/30 rounded-full" 
                              />
                              <div className="h-2 bg-white/10 rounded-full flex-grow" />
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                               <div className="space-y-3">
                                  <div className="h-12 bg-white/5 rounded-xl border border-white/5" />
                                  <div className="h-2 w-3/4 bg-white/5 rounded-full" />
                               </div>
                               <div className="space-y-3">
                                  <div className="h-12 bg-white/5 rounded-xl border border-white/5" />
                                  <div className="h-2 w-1/2 bg-white/5 rounded-full" />
                               </div>
                            </div>

                            <div className="h-20 bg-white/[0.02] rounded-xl flex items-center justify-center border border-dashed border-white/10">
                               <Code className="text-white/10 w-8 h-8" />
                            </div>
                          </div>
                        </motion.div>

                        {/* Floating elements anchored to container */}
                        <motion.div 
                          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute -right-4 top-1/3 glass p-4 rounded-xl shadow-2xl z-30"
                        >
                           <Terminal size={24} className="text-accent-teal" />
                        </motion.div>

                        <motion.div 
                          animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                          className="absolute -left-4 bottom-1/4 glass p-4 rounded-xl shadow-2xl z-30"
                        >
                           <Layers size={24} className="text-accent-cyan" />
                        </motion.div>
                      </div>
                    )}
                    {active === 2 && (
                       <div className="relative w-full h-full flex items-center justify-center overflow-visible">
                          {/* Background Data Matrix */}
                          <div className="absolute inset-0 flex flex-wrap gap-4 p-8 opacity-[0.015] font-mono text-[9px] overflow-hidden whitespace-nowrap leading-none select-none pointer-events-none rounded-2xl">
                            {Array.from({ length: 30 }).map((_, i) => (
                              <div key={i} className="flex flex-col gap-3">
                                {Array.from({ length: 25 }).map((_, j) => (
                                  <span key={j}>{Math.random().toString(16).slice(2, 6).toUpperCase()}</span>
                                ))}
                              </div>
                            ))}
                          </div>

                          <div className="relative w-[180px] sm:w-64 aspect-square flex items-center justify-center">
                            {/* Central Database Core */}
                            <motion.div 
                              animate={{ scale: [1, 1.05, 1] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                              className="w-16 h-16 sm:w-24 sm:h-24 glass rounded-full flex items-center justify-center z-10 border border-accent-violet/30 shadow-[0_0_60px_rgba(139,92,246,0.15)] bg-accent-violet/5"
                            >
                              <Database className="text-accent-violet w-6 h-6 sm:w-10 sm:h-10" />
                              <div className="absolute inset-[-4px] border border-accent-violet/20 rounded-full animate-ping opacity-20" />
                            </motion.div>

                            {/* Connector Nodes & Lines */}
                            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                              <div
                                 key={i}
                                 className="absolute top-1/2 left-1/2"
                                 style={{ 
                                   width: '1px',
                                   height: '1px',
                                   transform: `rotate(${angle}deg)` 
                                 }}
                              >
                                 {/* The Line pointing out from center */}
                                 <div 
                                   className="absolute top-0 left-[20px] sm:left-[30px] h-px bg-gradient-to-r from-accent-violet/40 to-transparent w-[50px] sm:w-[100px]"
                                 >
                                    <motion.div 
                                      animate={{ left: ["0%", "100%"] }}
                                      transition={{ 
                                        duration: 1.5 + Math.random(), 
                                        repeat: Infinity, 
                                        ease: "linear",
                                        delay: i * 0.2
                                      }}
                                      className="absolute top-[-1.5px] w-1 h-1 bg-accent-violet rounded-full blur-[1px]"
                                    />
                                 </div>

                                 {/* The Outer Node */}
                                 <motion.div 
                                   initial={{ opacity: 0 }}
                                   whileInView={{ opacity: 1 }}
                                   className="absolute top-1/2 left-[70px] sm:left-[100px] -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 glass rounded-lg flex items-center justify-center border border-white/10"
                                   style={{ transform: `rotate(-${angle}deg)` }}
                                 >
                                    {i % 2 === 0 ? <Share2 size={12} className="text-emerald-400/50" /> : <Layers size={12} className="text-emerald-400/50" />}
                                 </motion.div>
                              </div>
                            ))}
                            
                            {/* Orbiting Ring */}
                            <div className="absolute w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] border border-accent-violet/5 rounded-full" />
                          </div>
                        </div>
                      )}
                    </div>
                 </div>
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
