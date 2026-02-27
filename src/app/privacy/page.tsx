"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-zinc-500 mb-12">Last updated: February 2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-invert prose-zinc max-w-none"
          >
            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="text-zinc-400 leading-relaxed">
                Noventra (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use CompassPM.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">2. Information We Collect</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li><strong className="text-zinc-300">Account Information:</strong> Email address, name, and profile details</li>
                <li><strong className="text-zinc-300">Usage Data:</strong> How you interact with our Service</li>
                <li><strong className="text-zinc-300">Device Information:</strong> Browser type, IP address, operating system</li>
                <li><strong className="text-zinc-300">Content:</strong> Data you create, upload, or share within the Service</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                We use collected information to:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>Provide and maintain the Service</li>
                <li>Improve and personalize your experience</li>
                <li>Communicate with you about updates and features</li>
                <li>Ensure security and prevent fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">4. Data Sharing</h2>
              <p className="text-zinc-400 leading-relaxed">
                We do not sell your personal data. We may share information with trusted third-party service providers who assist us in operating the Service, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">5. Data Security</h2>
              <p className="text-zinc-400 leading-relaxed">
                We implement industry-standard security measures to protect your data, including encryption, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">6. Data Retention</h2>
              <p className="text-zinc-400 leading-relaxed">
                We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">7. Your Rights</h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-zinc-400 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">8. Cookies</h2>
              <p className="text-zinc-400 leading-relaxed">
                We use cookies and similar tracking technologies to track activity on our Service and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-zinc-400 leading-relaxed">
                Our Service is not intended for individuals under the age of 16. We do not knowingly collect personal information from children under 16.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">10. Changes to This Policy</h2>
              <p className="text-zinc-400 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold text-white mb-4">11. Contact Us</h2>
              <p className="text-zinc-400 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:privacy@noventra.com" className="text-accent hover:underline">
                  privacy@noventra.com
                </a>
              </p>
            </section>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
