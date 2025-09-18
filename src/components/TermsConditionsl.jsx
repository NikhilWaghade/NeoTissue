import React from "react";
import { motion } from "framer-motion";

export default function TermsConditions() {
  return (
    <>
      {/* Header */}
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
          Terms & Conditions
        </h1>
        <p className="mt-4 text-lg md:text-xl p-4 rounded-2xl text-black">
          Current as of June 11, 2025
        </p>
      </motion.div>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-100  -mt-12 px-4 sm:px-6 lg:px-12">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden">
          <div className="p-6 md:p-10">
            <main className="space-y-6 text-black leading-relaxed">
              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  1. Acceptance of Terms
                </h2>
                <p className="mt-2 text-black">
                  By accessing or using our website or purchasing from{" "}
                  <strong>Neotissue</strong>, you agree to these Terms &
                  Conditions. If you do not agree, please do not use our site or
                  services.
                </p>
              </section>

              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  2. Medical Disclaimer
                </h2>
                <p className="mt-2 text-black">
                  All content is provided for informational purposes only and is
                  not intended as medical advice. Our products are only for use
                  by licensed medical professionals. Always consult a healthcare
                  provider for medical decisions.
                </p>
              </section>

              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  3. Product Use & Eligibility
                </h2>
                <p className="mt-2 text-black">
                  Our products are intended for qualified healthcare
                  institutions and professionals. By placing an order, you
                  confirm that you are authorized to purchase and use regulated
                  medical products.
                </p>
                <h3 className="text-2xl font-semibold mt-4 text-black">
                  3a. Medical Verification Requirement
                </h3>
                <p className="mt-2 text-black">
                  Purchase of our products is strictly limited to licensed
                  medical professionals or verified members of licensed medical
                  groups. Proof of licensure or professional affiliation is
                  required and must be provided during the ordering process.
                  Verification will be requested either at checkout or through
                  direct contact before the order is approved and fulfilled.
                </p>
              </section>

              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  4. Order Fulfillment
                </h2>

                <h3 className="text-2xl font-semibold mt-4 text-black">
                  a. Shipping Policy
                </h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Orders are processed within 1–2 business days.</li>
                  <li>Shipping is available throughout the U.S.</li>
                  <li>We use certified or priority carriers.</li>
                  <li>Tracking is provided once the order is dispatched.</li>
                </ul>

                <h3 className="text-2xl font-semibold mt-4 text-black">
                  b. Return Policy
                </h3>
                <p className="mt-2 text-black">
                  Due to the sterile nature of our products, we do not accept
                  returns. If you receive damaged, incorrect, or defective
                  products, contact us within 7 days of receipt to arrange a
                  replacement or refund.
                </p>

                <h3 className="text-2xl font-semibold mt-4 text-black">
                  c. Refund Policy
                </h3>
                <p className="mt-2 text-black">
                  Refunds are only issued in the case of shipping damage, order
                  error, or verified product defect. Contact support with your
                  order number and description of the issue.
                </p>

                <h3 className="text-2xl font-semibold mt-4 text-black">
                  d. Cancellation Policy
                </h3>
                <p className="mt-2 text-black">
                  Orders can be canceled within 24 hours of placement if not yet
                  shipped. Contact customer service as soon as possible.
                </p>
              </section>

              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  5. Payment Terms
                </h2>
                <p className="mt-2 text-black">
                  We accept major credit/debit cards via Stripe. All
                  transactions are encrypted and processed securely. Payments
                  are due at the time of purchase unless otherwise agreed upon
                  in writing.
                </p>
              </section>

              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  6. Intellectual Property
                </h2>
                <p className="mt-2 text-black">
                  All website content—including text, logos, graphics, and
                  images—is the property of <strong>Neotissue</strong> and may
                  not be used without written permission.
                </p>
              </section>

              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  7. Limitation of Liability
                </h2>
                <p className="mt-2 text-black">
                  We are not liable for any indirect or consequential damages
                  arising from use of our products or website. Liability is
                  limited to the value of the order.
                </p>
              </section>

              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  8. Governing Law
                </h2>
                <p className="mt-2 text-black">
                  These terms are governed by the laws of the State of New
                  Jersey.
                </p>
              </section>

              <section>
                <h2 className="text-4xl font-semibold mt-1 text-black">
                  9. Contact Us
                </h2>
                <p className="mt-2 text-black">
                  For questions or support, contact:
                </p>
                <div className="mt-3 p-4 rounded-lg">
                  <p className="text-sm text-black -ml-4 -mt-6">
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:Care@NeoTissuebio.com"
                      className="underline hover:underline"
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
