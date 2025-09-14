import React from "react";
import { motion } from "framer-motion";

import dataimg1 from "../assets/prodata9.jpg";
import { fadeUp } from "../utils/animations";
import productImg2 from "../assets/productImg2.png";
import KeyBenefits from "../components/KeyBenefits";

export default function ProductData2() {
  const featureBoxes = [
    {
      title: "Flexible",
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/663e8355fec842ab62f125d2_Group%202.svg",
    },
    {
      title: "Protective Covering",
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/663e83553bafc66bdc1a1bf0_Group%204.svg",
    },
    {
      title: "Dehydrated",
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/67f65b0d05408f83f7eed457_Frame%20(1).svg",
    },
    {
      title: "Ambient Temperature Storage",
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/67f65b43a62abfaccfd9abba_Frame%20(2).svg",
    },
    {
      title: "Terminally Sterilized",
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/67f65ac823535dc33e8672f7_Frame.svg",
    },
  ];

  return (
    <div className="w-full">
      {/* Section 1: Hero */}
      <section
        className="relative h-[500px] flex items-center justify-center text-center text-white w-full"
        style={{
          backgroundImage: `url(${dataimg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-10 text-5xl md:text-6xl font-bold px-4"
        >
          Membrane Wrap™ - Advanced Amniotic Allograft
        </motion.h1>
      </section>

      {/* Section 2: Left text, right image */}
      <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h1 className="text-black text-5xl">
            {" "}
            Membrane Wrap™ is a Dehydrated Dual-Layer Amniotic Tissue Allograft
            which serves as a wound cover or barrier protecting the wound from
            the environment.
          </h1>
        </div>
        <div className="md:w-1/2">
          <img
            src={productImg2}
            alt="Membrane Wrap Product"
            className="rounded-xl shadow-lg"
          />

          <p className="text-lg text-black mt-10">
            Membrane Wrap™ is a Dehydrated Dual-Layer Amniotic Tissue Allograft
            which serves as a wound cover or barrier protecting the wound from
            the environment. It is designed to maintain properties exhibited in
            its natural state while undergoing terminal sterilization and safety
            testing for infectious diseases.
          </p>
        </div>
      </section>

      {/* Section 3: 5 feature boxes with pink-purple gradient heading */}
      <section className="py-16 bg-[#eee] px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700">
          Key Features
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
          {featureBoxes.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-xl p-[2px] bg-gradient-to-r from-pink-500 to-purple-700"
            >
              <div className="bg-white rounded-xl shadow p-6 text-center h-full flex flex-col items-center justify-center">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="mx-auto mb-4 w-16 h-16"
                />
                <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700 text-3xl">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Available Sizes table */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700 text-center">
          Available Sizes
        </h2>
        <div className="flex justify-center">
          <table className="w-96 border border-purple-400 border-collapse text-left">
            <thead>
              <tr className="bg-purple-500 text-white">
                <th className="py-4 px-6 font-semibold border border-purple-400">
                  Product Size
                </th>
                <th className="py-4 px-6 font-semibold border border-purple-400">
                  Units (SQCM)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-purple-100">
                <td className="py-4 px-6 border border-purple-400 md:p-8">
                  2x2cm
                </td>
                <td className="py-4 px-6 border border-purple-400">4</td>
              </tr>
              <tr className="bg-white">
                <td className="py-4 px-6 border border-purple-400 md:p-8">
                  2x3cm
                </td>
                <td className="py-4 px-6 border border-purple-400">6</td>
              </tr>
              <tr className="bg-purple-100">
                <td className="py-4 px-6 border border-purple-400 md:p-8">
                  4x4cm
                </td>
                <td className="py-4 px-6 border border-purple-400">16</td>
              </tr>
              <tr className="bg-white">
                <td className="py-4 px-6 border border-purple-400 md:p-8">
                  4x6cm
                </td>
                <td className="py-4 px-6 border border-purple-400">24</td>
              </tr>
              <tr className="bg-purple-100">
                <td className="py-4 px-6 border border-purple-400 md:p-8">
                  4x8cm
                </td>
                <td className="py-4 px-6 border border-purple-400">32</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* section 5 KeyBenefits  */}
      <KeyBenefits />
    </div>
  );
}
