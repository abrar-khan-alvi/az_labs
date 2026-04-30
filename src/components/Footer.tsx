import { Plus, Github, Twitter, Linkedin, Terminal, ArrowRight, ArrowUp } from "lucide-react";
import ScrambleText from "./ScrambleText";
import React, { useState, useRef } from "react";
import { motion } from "motion/react";

const LinkItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="group flex items-center gap-2 text-white/60 hover:text-accent-cyan transition-colors w-fit">
      <span className="relative overflow-hidden">
        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{children}</span>
        <span className="absolute left-0 top-full inline-block transition-transform duration-300 group-hover:-translate-y-full text-accent-cyan">{children}</span>
      </span>
      <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
    </a>
  </li>
);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 100 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      ref={footerRef}
      onMouseMove={handleMouseMove}
      className="pt-8 pb-4 px-8 border-t border-white/10 bg-background relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 pointer-events-none transition-all duration-300 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(0,209,255,0.08), transparent 40%)`
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid md:grid-cols-4 gap-8 md:gap-6 mb-2">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4 group cursor-pointer w-fit" onClick={scrollToTop}>
              <span className="font-display font-black text-3xl tracking-tighter italic group-hover:text-accent-cyan transition-colors">AZ<span className="text-accent-cyan group-hover:text-white transition-colors">_</span></span>
              <span className="text-[10px] font-mono tracking-[0.3em] font-bold mt-1 text-white/50 group-hover:text-white transition-colors">LABS</span>
            </div>
            <p className="text-sm text-white/40 max-w-sm mb-4 leading-relaxed">
              Architecting high-performance autonomous agents and custom enterprise software for the intelligence era.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-accent-cyan hover:border-accent-cyan/30 hover:bg-accent-cyan/5 hover:-translate-y-1 transition-all duration-300">
                <Twitter size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-accent-cyan hover:border-accent-cyan/30 hover:bg-accent-cyan/5 hover:-translate-y-1 transition-all duration-300">
                <Github size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-accent-cyan hover:border-accent-cyan/30 hover:bg-accent-cyan/5 hover:-translate-y-1 transition-all duration-300">
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/30 mb-4 font-bold">Platform</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <LinkItem href="#agents">Agents</LinkItem>
              <LinkItem href="#integrations">Integrations</LinkItem>
              <LinkItem href="#infrastructure">Infrastructure</LinkItem>
              <LinkItem href="#security">Security</LinkItem>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/30 mb-4 font-bold">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <LinkItem href="#about">About Us</LinkItem>
              <LinkItem href="#careers">Careers</LinkItem>
              <LinkItem href="#blog">Blog</LinkItem>
              <LinkItem href="#contact">Contact</LinkItem>
            </ul>
          </div>
        </div>

        {/* Huge Interactive Text */}
        <div 
          onClick={scrollToTop}
          className="relative py-2 flex items-center justify-center cursor-pointer group mb-4"
        >
          <h1 className="text-[4vw] font-display font-black tracking-tighter text-white/5 group-hover:text-white/10 transition-colors duration-700 select-none">
            AZ<span className="text-accent-cyan/10 group-hover:text-accent-cyan/20 transition-colors">_</span>LABS
          </h1>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 bg-accent-cyan/10 backdrop-blur-md border border-accent-cyan/20 text-accent-cyan px-4 py-2 rounded-full flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest">
                Back to Top <ArrowUp size={12} className="animate-bounce" />
             </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6 text-[10px] font-mono tracking-[0.2em] text-white/30 uppercase">
            <span>© 2024 AZ_LABS_CORE</span>
            <div className="h-4 w-px bg-white/10 hidden md:block"></div>
            <a href="#" className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all">Privacy</a>
            <div className="h-4 w-px bg-white/10 hidden md:block"></div>
            <a href="#" className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-white hover:after:w-full after:transition-all">Terms</a>
          </div>

          <div className="flex items-center gap-3 glass px-4 py-2 rounded-full border border-white/5 hover:border-accent-teal/30 hover:bg-accent-teal/5 transition-all cursor-pointer group">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-teal opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-teal"></span>
              </span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-accent-teal">
              <ScrambleText text="All Systems Operational" delay={100} scrambleOnHover={true} />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
