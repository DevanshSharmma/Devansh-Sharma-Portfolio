import React, { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { Mail, Phone, MapPin, Copy, Check, Send, Sparkles, Code2 } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-electric-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-cyan-400 uppercase">
              07 / LET'S CONNECT
            </span>
            <div className="h-[1px] w-16 bg-gradient-to-r from-cyan-500/50 to-transparent" />
          </div>

          <h2 className="font-racing font-extrabold text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight max-w-2xl">
            Let's build something{" "}
            <span className="text-gradient-cyan">intelligent together.</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl font-normal">
            Have an opportunity, project or interesting idea? Let's connect and create something impactful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-dark-900/90 to-dark-950/90 border border-white/10 backdrop-blur-xl shadow-xl space-y-6">
              <h3 className="font-racing font-bold text-xl text-white tracking-tight">
                Direct Contact Channels
              </h3>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-dark-950 border border-white/5 hover:border-electric-500/30 transition-colors group flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="p-3 rounded-xl bg-dark-900 border border-white/10 text-electric-400 group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Email
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-mono text-slate-200 hover:text-electric-300 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.email, "email")}
                  className="p-2 rounded-lg bg-dark-900 hover:bg-dark-850 text-slate-400 hover:text-white transition-colors shrink-0"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LeetCode Direct Card */}
              <div className="p-4 rounded-2xl bg-dark-950 border border-amber-400/20 hover:border-amber-400/50 transition-colors group flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 overflow-hidden">
                  <div className="p-3 rounded-xl bg-dark-900 border border-amber-400/20 text-amber-400 group-hover:scale-105 transition-transform shrink-0">
                    <SiLeetcode className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      LeetCode Profile
                    </span>
                    <a
                      href={personalInfo.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-mono text-amber-300 hover:text-amber-200 transition-colors truncate block"
                    >
                      leetcode.com/u/DevanshSharmma
                    </a>
                  </div>
                </div>

                <a
                  href={personalInfo.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-dark-900 hover:bg-amber-400/20 text-amber-400 transition-colors shrink-0"
                  aria-label="Open LeetCode"
                >
                  <Code2 className="w-4 h-4" />
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-dark-950 border border-white/5 hover:border-cyan-500/30 transition-colors group flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-dark-900 border border-white/10 text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                      Phone
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-xs sm:text-sm font-mono text-slate-200 hover:text-cyan-300 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                  className="p-2 rounded-lg bg-dark-900 hover:bg-dark-850 text-slate-400 hover:text-white transition-colors shrink-0"
                  aria-label="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-dark-950 border border-white/5 flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-dark-900 border border-white/10 text-neon-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-slate-200">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Social Channels with LeetCode, GitHub, LinkedIn */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-3">
                  Professional Profiles
                </span>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-2 rounded-xl bg-dark-950 border border-amber-400/20 hover:border-amber-400 text-slate-300 hover:text-amber-300 text-xs font-mono flex items-center justify-center gap-1.5 transition-all hover:-translate-y-0.5"
                  >
                    <SiLeetcode className="w-4 h-4 text-amber-400" />
                    <span>LeetCode</span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-2 rounded-xl bg-dark-950 border border-white/10 hover:border-white text-slate-300 hover:text-white text-xs font-mono flex items-center justify-center gap-1.5 transition-all hover:-translate-y-0.5"
                  >
                    <FaGithub className="w-4 h-4 text-slate-200" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-2 rounded-xl bg-dark-950 border border-blue-400/20 hover:border-blue-400 text-slate-300 hover:text-blue-300 text-xs font-mono flex items-center justify-center gap-1.5 transition-all hover:-translate-y-0.5"
                  >
                    <FaLinkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-dark-900/90 to-dark-950/90 border border-cyan-500/25 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <h3 className="font-racing font-bold text-2xl text-white tracking-tight">
                    Send a Message
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    Direct dispatch to Devansh's inbox
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Active Response Time &lt; 24h
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
