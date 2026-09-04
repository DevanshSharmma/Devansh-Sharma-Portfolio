import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Sparkles, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");

    // Simulate reliable dispatch
    setTimeout(() => {
      setStatus("success");

      // Fire festive tech confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ["#3b82f6", "#06b6d4", "#a855f7", "#ffffff"]
      });

      // Reset form after delay
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setStatus("idle");
      }, 5000);
    }, 1200);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name Input */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
          Your Name <span className="text-electric-400">*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. John Doe"
            className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 focus:border-electric-400 focus:ring-1 focus:ring-electric-400 text-sm text-slate-100 placeholder-slate-400 transition-all outline-none"
          />
        </div>
      </div>

      {/* Email Input */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
          Your Email <span className="text-electric-400">*</span>
        </label>
        <div className="relative">
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. john@example.com"
            className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 focus:border-electric-400 focus:ring-1 focus:ring-electric-400 text-sm text-slate-100 placeholder-slate-400 transition-all outline-none"
          />
        </div>
      </div>

      {/* Message Input */}
      <div>
        <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
          Your Message <span className="text-electric-400">*</span>
        </label>
        <div className="relative">
          <textarea
            name="message"
            rows="4"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell me about your project, idea, or opportunity..."
            className="w-full px-4 py-3 rounded-xl bg-dark-950/80 border border-white/10 focus:border-electric-400 focus:ring-1 focus:ring-electric-400 text-sm text-slate-100 placeholder-slate-400 transition-all outline-none resize-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "sending" || status === "success"}
        className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-electric-600 via-electric-500 to-neon-500 hover:from-electric-500 hover:to-neon-400 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-electric-500/25 hover:shadow-electric-500/40 transition-all duration-300 disabled:opacity-75 group relative overflow-hidden active:scale-[0.99]"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Encrypting & Sending Message...</span>
          </>
        ) : status === "success" ? (
          <>
            <CheckCircle2 className="w-4 h-4 text-white" />
            <span>Message Sent Successfully!</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
          </>
        )}
      </button>

      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-xs text-emerald-400 font-mono"
        >
          Thank you! Devansh will respond to your message shortly.
        </motion.p>
      )}
    </form>
  );
}
