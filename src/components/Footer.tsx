"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, CheckCircle } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Agents", "Integrations", "Pricing", "Changelog"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Resources: ["Documentation", "API Reference", "Status", "Support"],
  Legal: ["Privacy", "Terms", "Security"],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "footer" }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="py-16 bg-background border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Logo & tagline */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white font-semibold text-lg">Noventra</span>
              <span className="px-2 py-0.5 text-[10px] font-medium bg-accent text-white rounded-full">
                CompassPM
              </span>
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed">
              AI-native product management workspace. Cursor for PMs.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            © 2026 Noventra. All rights reserved.
          </p>

          {/* Email signup */}
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-green-400 text-sm"
            >
              <CheckCircle size={16} />
              You&apos;re on the list!
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                required
                disabled={status === "loading"}
                className="px-4 py-2 w-48 bg-surface border border-[rgba(255,255,255,0.1)] rounded-lg text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:border-accent transition-all disabled:opacity-50"
              />
              <motion.button
                type="submit"
                disabled={status === "loading" || !email}
                whileHover={{ scale: status === "loading" ? 1 : 1.03 }}
                className="px-4 py-2 text-sm font-medium text-white bg-accent hover:bg-accent-dark rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
              >
                {status === "loading" ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  "Join"
                )}
              </motion.button>
            </form>
          )}
        </div>

        {/* Made by & Legal links */}
        <div className="pt-6 mt-6 border-t border-[rgba(255,255,255,0.06)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            Made by{" "}
            <a href="#" className="text-white hover:text-accent transition-colors font-medium">
              Noventra
            </a>
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/terms"
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              Terms of Use
            </a>
            <a
              href="/privacy"
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
