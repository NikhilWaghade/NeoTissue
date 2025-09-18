import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <>
      {/* Header Section */}
      <motion.div
        className="text-center mb-12 py-52 rounded-xl"
        style={{
          backgroundImage: "linear-gradient(90deg, #ffdeed, #e3bdff)",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl md:text-5xl xl:text-6xl font-bold text-black">
          Privacy Policy
        </h1>
        <p className="mt-4 text-lg md:text-xl p-4 rounded-2xl text-black">
          Current as of May 7, 2025
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100 -mt-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden">
          <div className="p-6 md:p-10">
            <main className="space-y-6 text-black leading-relaxed">
              <section>
                <p className="text-black">
                  This Privacy Policy describes how{" "}
                  <strong>NeotissueBio</strong> collects, uses, and protects
                  your personal information.
                </p>
              </section>

              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  1. Information We Collect
                </h2>
                <ul className="list-disc list-inside mt-2 space-y-1 text-black">
                  <li>
                    <strong>Personal Info:</strong> Name, email, phone,
                    billing/shipping address.
                  </li>
                  <li>
                    <strong>Order Info:</strong> Purchase history, product
                    preferences.
                  </li>
                  <li>
                    <strong>Technical Data:</strong> IP address, browser type,
                    site usage (via cookies).
                  </li>
                  <li>
                    <strong>Health Info:</strong> Only if voluntarily submitted
                    or as part of a product inquiry (handled in accordance with
                    applicable HIPAA standards).
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  2. How We Use Your Information
                </h2>
                <ul className="list-disc list-inside mt-2 space-y-1 text-black">
                  <li>To fulfill your orders and provide customer support.</li>
                  <li>To communicate about product updates or account info.</li>
                  <li>To comply with legal obligations.</li>
                  <li>To improve site performance and user experience.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  3. Sharing of Information
                </h2>
                <p className="mt-2 text-black">
                  We do not sell or rent your data. We may share data with:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-black">
                  <li>
                    <b>Service providers</b> (e.g., Stripe, shipping carriers).
                  </li>
                  <li>
                    <b>Legal authorities</b> when required by law.
                  </li>
                  <li>
                    <b>Business partners</b> under confidentiality agreements.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  4. Data Security
                </h2>
                <p className="mt-2 text-black">
                  We use secure servers, encrypted payments, and access controls
                  to protect your data. Sensitive information is handled in
                  accordance with HIPAA where applicable.
                </p>
              </section>

              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  5. Your Rights
                </h2>
                <p className="mt-2 text-black">You may:</p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-black">
                  <li>Request a copy of your data.</li>
                  <li>Ask us to correct or delete your data.</li>
                  <li>Withdraw consent to communications at any time.</li>
                </ul>
                <p className="mt-2 text-black">
                  To exercise your rights, contact us at{" "}
                  <a
                    href="mailto:Care@NeoTissuebio.com"
                    className="underline hover:underline font-medium text-black"
                  >
                    Care@NeoTissuebio.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  6. Cookies
                </h2>
                <p className="mt-2 text-black">
                  We use cookies for essential site functionality and analytics.
                  You can manage cookie settings in your browser.
                </p>
              </section>

              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  7. Children’s Privacy
                </h2>
                <p className="mt-2 text-black">
                  Our site and services are not intended for children under 13.
                  We do not knowingly collect personal data from minors.
                </p>
              </section>

              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  8. Changes to This Policy
                </h2>
                <p className="mt-2 text-black">
                  We may update this Privacy Policy. The latest version will
                  always be posted on our site with the effective date.
                </p>
              </section>

              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  9. Contact Us
                </h2>
                <p className="mt-2 text-black">
                  For questions or privacy-related requests, contact:
                </p>
                <div className="mt-3 p-4 rounded-lg">
                  <p className="text-sm text-black -ml-4 -mt-6">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:Care@NeoTissuebio.com"
                      className="underline hover:underline text-black"
                    >
                      Care@NeoTissuebio.com
                    </a>
                  </p>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
