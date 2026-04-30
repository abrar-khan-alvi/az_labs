import { motion } from "motion/react";
import { Send, CheckCircle2 } from "lucide-react";
import { useState, FormEvent, useRef } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      whatsapp: (form.elements.namedItem("whatsapp") as HTMLInputElement).value,
      objective: (form.elements.namedItem("objective") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
      formRef.current?.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 relative flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent-cyan/5 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl mx-auto glass p-5 sm:p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 relative overflow-hidden"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent-cyan/50 to-transparent" />
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent-cyan/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center">
          <span className="text-accent-cyan font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold mb-3 md:mb-4">
            Initiate Sequence
          </span>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-3 md:mb-4 leading-[1.1]">
            Ready to Build <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-accent-cyan">
              Autonomous Systems?
            </span>
          </h2>

          <p className="text-white/40 max-w-xl text-sm md:text-base mb-6 md:mb-8 px-2">
            Engage with our core engineering team to map out your infrastructure 
            and define the trajectory of your next agentic network.
          </p>

          {submitted ? (
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-accent-cyan/10 border border-accent-cyan/20 rounded-3xl p-8 md:p-10 w-full max-w-md flex flex-col items-center mx-4"
            >
              <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-accent-cyan mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-2">Request Logged</h3>
              <p className="text-xs md:text-sm text-white/50 px-4">Our systems have recorded your transmission. Expect contact shortly.</p>
            </motion.div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-3xl glass p-5 sm:p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border border-white/10 shadow-2xl space-y-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 transition-all placeholder:text-white/20"
                />
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 transition-all placeholder:text-white/20"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 transition-all placeholder:text-white/20"
                />
                <input
                  required
                  name="whatsapp"
                  type="tel"
                  placeholder="WhatsApp Number"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 transition-all placeholder:text-white/20"
                />
              </div>
              <textarea
                required
                name="objective"
                rows={3}
                placeholder="Describe your primary objective..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-accent-cyan/50 transition-all resize-none placeholder:text-white/20"
              />
              {error && (
                <p className="text-red-400 text-xs text-center">{error}</p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full group bg-white text-background hover:bg-accent-cyan hover:text-white py-4 sm:py-5 rounded-xl font-bold tracking-widest text-[10px] sm:text-xs uppercase flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span>{loading ? "Sending..." : "Launch Partnership"}</span>
                {!loading && <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </section>
  );
}
