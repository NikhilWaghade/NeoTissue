import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Products() {
  return (
    <div className="w-full">
      <div className="mx-auto">
        {/* ✅ Intro Section at Top */}
        <motion.div
          className="text-center mb-16 py-40"
          style={{
            backgroundImage: "linear-gradient(90deg, #ffdeed, #e3bdff)",
          }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-black">
            Advanced Wound Care <br /> Products
          </h1>
          <p className="mt-6 text-lg md:text-xl p-6 rounded-2xl">
            Our revolutionary biologic products and services tailored for <br />
            enhanced wound care and superior patient outcomes.
          </p>
        </motion.div>

        {/* ✅ Product Cards Section */}
        <div className="px-8 -mt-12 py-20 sm:px-12 lg:px-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-white">
            {[
              {
                title: "Xsonx® Wound Hygiene",
                desc: "XSONX® Wound Hygiene System – Advanced Wound Care Technology",
              },
              {
                title: "Membrane Wrap",
                desc: "Membrane Wrap™ – Dual-Layer Amniotic Tissue Allograft",
              },
              {
                title: "Simplimax",
                desc: "Simplimax™ – Dual Layer Amniotic Allograft for Wound Care",
              },
              {
                title: "Tri-Membrane Wrap",
                desc: "Tri-Membrane Wrap™ – Triple-Layer Amniotic Tissue Allograft",
              },
              {
                title: "XCELL Amnio Matrix",
                desc: "XCELL Amnio Matrix™ – Lyophilized Amniotic Allograft",
              },
              {
                title: "Activate",
                desc: "Activate™ – Full Thickness Placental Allograft for Wound Care",
              },
              {
                title: "Amnio AMP-MP",
                desc: "Amnio AMP-MP™ – Dual Layer Amniotic Allograft for Healing",
              },
              {
                title: "AmchoPlast",
                desc: "AmchoPlast™ - Dehydrated Full-Thickness Placental Tissue Allograft",
              },
              {
                title: "Esano ACA",
                desc: "Esano ACA™ – Triple-Layer Placental Allograft for Wound Care",
              },
              {
                title: "Membrane Wrap Hydro",
                desc: "Membrane Wrap Hydro™ – Pre-Hydrated Amniotic Tissue Allograft",
              },
              {
                title: "XCEED TL Matrix™",
                desc: "XCEED TL Matrix™ – Dehydrated Amnion-Chorion-Amnion Allograft",
              },
            ].map((product, i) => (
              <motion.div
                key={i}
                className="p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* ✅ Inner white box */}
                <div className="h-full p-14 bg-white rounded-2xl flex flex-col justify-between">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                    {product.title}
                  </h3>
                  <p className="mt-4 text-sm bg-purple-50 p-3 rounded-lg text-gray-700">
                    {product.desc}
                  </p>
                  {/* ✅ Center button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-32 mx-auto mt-6 px-4 py-2 rounded-lg text-white font-semibold border-2 border-transparent bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ✅ Image Section */}
        <motion.section
          className="py-32 px-6 text-center bg-gray-100"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* ✅ Logos Row */}
          <motion.div
            className="flex justify-center items-center gap-10 flex-wrap mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/663dd9b49046e7cb70e4a236_Group%207.svg"
              alt="Logo 1"
              className="h-40 w-auto"
            />
            <img
              src="https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/663dd9b5dc3f9a383ae3fe43_Group%206.svg"
              alt="Logo 2"
              className="h-40 w-auto"
            />
            <img
              src="https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/663dd9babeed414c07bd2af1_Group%205.svg"
              alt="Logo 3"
              className="h-40 w-auto"
            />
          </motion.div>

          {/* ✅ Text Line */}
          <motion.p
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-700 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Contact Life Biologics today to explore their curated selection of
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
      </div>
    </div>
  );
}
