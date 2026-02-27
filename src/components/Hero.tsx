"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Play, Loader2, CheckCircle } from "lucide-react";
import dynamic from "next/dynamic";

const NetworkScene = dynamic(() => import("./NetworkScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

const words = ["Find every gap.", "Fix everything", "in one command."];

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "hero" }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage(data.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="relative min-h-screen pt-16 overflow-hidden">
      {/* Background gradient bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(99,102,241,0.08), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 h-[calc(100vh-64px)] flex flex-col lg:flex-row items-center">
        {/* Text content - Left column */}
        <div className="flex-1 lg:w-[60%] flex flex-col justify-center py-12 lg:py-0 z-10">
          {/* Badge */}
          <motion.div
            initial={{ x: -12, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-sm text-accent border border-accent/40 rounded-full">
              Private beta · Now open
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="mt-8 text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="block overflow-hidden">
                {word.split(" ").map((w, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.2 + (wordIndex * 2 + i) * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block mr-[0.25em]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {w}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-md"
          >
            CompassPM by Noventra connects to Jira, Notion, Confluence and Slack
            — scans your workspace for mismatches, then proposes precise
            multi-file fixes with diff previews and full source citations.
          </motion.p>

          {/* Email Signup Form */}
          <motion.div
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl"
              >
                <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                <span className="text-green-300 text-sm">{message}</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={status === "loading"}
                  className="flex-1 px-4 py-3 bg-surface border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all disabled:opacity-50"
                />
                <motion.button
                  type="submit"
                  disabled={status === "loading" || !email}
                  whileHover={{ scale: status === "loading" ? 1 : 1.03 }}
                  whileTap={{ scale: status === "loading" ? 1 : 0.98 }}
                  className="px-6 py-3 text-sm font-medium text-white bg-accent hover:bg-accent-dark rounded-xl transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Joining...
                    </>
                  ) : (
                    "Join Waitlist"
                  )}
                </motion.button>
              </form>
            )}
            
            {status === "error" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 text-red-400 text-sm"
              >
                {message}
              </motion.p>
            )}
          </motion.div>

          {/* Trust strip */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.9 }}
            className="mt-6 text-sm text-zinc-500"
          >
            No migrations · Free during beta · Works with your stack
          </motion.p>
        </div>

        {/* 3D Scene - Right column */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-1 lg:w-[40%] h-[400px] lg:h-full relative"
        >
          <NetworkScene />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={24} className="text-zinc-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
