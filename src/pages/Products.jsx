import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import KeyBenefits from "../components/KeyBenefits";

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
       <KeyBenefits/>
      </div>
    </div>
  );
}
