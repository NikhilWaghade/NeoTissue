import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function KeyBenefits() {
  return (
    <motion.section
      className="py-32 px-6 text-center bg-gray-100"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* ✅ Logos Row */}
      <motion.div
        className="flex flex-row justify-center items-center gap-4 md:gap-10 mb-8 flex-wrap"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/663dd9b49046e7cb70e4a236_Group%207.svg"
          alt="Unmatched Selection"
          className="h-20 w-auto sm:h-28 md:h-40"
        />
        <img
          src="https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/663dd9b5dc3f9a383ae3fe43_Group%206.svg"
          alt="Reimbursement Support"
          className="h-20 w-auto sm:h-28 md:h-40"
        />
        <img
          src="https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/663dd9babeed414c07bd2af1_Group%205.svg"
          alt="Educational Resources"
          className="h-20 w-auto sm:h-28 md:h-40"
        />
      </motion.div>

      {/* ✅ Text Line */}
      <motion.p
        className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-gray-700 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Contact Neotissue Biologics today to explore their curated selection of
        advanced tissue products and discover how they can elevate your
        wound care practice.
      </motion.p>

      {/* ✅ Button */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <Link
          to="/contact"
          className="px-8 py-3 rounded-lg text-white font-semibold border-2 border-transparent bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition"
        >
          Contact Us
        </Link>
      </motion.div>
    </motion.section>
  );
}
