import { motion } from "motion/react";
// Removed unused Plus import

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-3 md:py-4 px-6 md:px-12 backdrop-blur-md bg-background/80 border-b border-white/5"
    >
      <div className="w-full max-w-7xl flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-4">
          <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 flex items-center justify-center">
            <img src="/logo.png" alt="AZ LABZ Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="text-base md:text-lg font-bold tracking-tighter leading-none">AZ LABZ</span>
            <span className="text-[6px] md:text-[8px] text-accent-teal font-mono tracking-widest uppercase opacity-80">Automation Intelligence</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
          <a href="#services" className="hover:text-accent-cyan transition-colors">Services</a>
          <a href="#process" className="hover:text-accent-cyan transition-colors">Process</a>
          <a href="#work" className="hover:text-accent-cyan transition-colors">Work</a>
          <a href="#contact" className="hover:text-accent-cyan transition-colors">Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}
