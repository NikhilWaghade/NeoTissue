import React from "react";
import { motion } from "framer-motion";

import dataimg1 from "../assets/prodata9.jpg";
import { fadeUp } from "../utils/animations";
import productImg2 from "../assets/productImg2.png";
import KeyBenefits from "../components/KeyBenefits";

export default function ProductData11() {
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
      title: "Amnion-Chorion-Amnion",
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/67f65fb7b677003f971826ce_Frame%20(3).svg",
    },
    {
      title: "Ambient Temperature Storage",
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/67f65b43a62abfaccfd9abba_Frame%20(2).svg",
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
          className="relative z-10 text-3xl md:text-6xl font-bold px-4 leading-snug"
        >
          XCEED TL Matrix™
        </motion.h1>
      </section>

      {/* Section 2: Left text, right image */}
      <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Side Text */}
        <div className="md:w-1/2">
          <h1 className="text-black text-2xl md:text-5xl leading-snug">
            XCEED TL Matrix™ is a dehydrated tri-layer Amnion-Chorion-Amnion
            Allograft which serves as a wound cover or barrier, protecting the
            wound from the environment.
          </h1>
        </div>

        {/* Right Side Image + Text */}
        <div className="md:w-1/2 flex flex-col items-start">
          <img
            src={productImg2}
            alt="Membrane Wrap Product"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
          <p className="text-base md:text-lg text-black mt-10 leading-relaxed text-left">
            XCEED TL™ is a Tri-layer placental-derived allograft matrix
            developed using advanced processing techniques, which aims to
            maintain structural integrity while addressing immunogenic
            components.
            <br />
            <br />
            The allograft is designed to retain extracellular matrix proteins
            and may serve as a natural, biologic barrier or wound cover.
            <br />
            <br />
            Through minimal manipulation and terminal sterilization, the
            dehydrated allograft is processed in compliance with FDA and AATB
            standards.
          </p>
        </div>
      </section>

      {/* Section 3: Key Features */}
      <section className="py-16 bg-[#eee] px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700">
          Key Features
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {featureBoxes.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-xl p-[2px] bg-gradient-to-r from-pink-500 to-purple-700"
            >
              <div className="bg-white rounded-xl shadow p-6 text-center h-full flex flex-col items-center justify-center">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="mx-auto mb-4 w-12 h-12 sm:w-16 sm:h-16"
                />
                <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700 text-lg sm:text-xl md:text-2xl">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Available Sizes table */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700 text-center">
          Available Sizes
        </h2>
        <div className="flex justify-center overflow-x-auto">
          <table className="w-96 border border-purple-400 border-collapse text-left">
            <thead>
              <tr className="bg-purple-500 text-white">
                <th className="py-3 px-4 sm:py-4 sm:px-6 font-semibold border border-purple-400">
                  Product Size
                </th>
                <th className="py-3 px-4 sm:py-4 sm:px-6 font-semibold border border-purple-400">
                  Units (SQCM)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-purple-100">
                <td className="py-3 px-4 sm:py-4 sm:px-6 border border-purple-400">
                  2x2cm
                </td>
                <td className="py-3 px-4 sm:py-4 sm:px-6 border border-purple-400">
                  4
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-3 px-4 sm:py-4 sm:px-6 border border-purple-400">
                  2x3cm
                </td>
                <td className="py-3 px-4 sm:py-4 sm:px-6 border border-purple-400">
                  6
                </td>
              </tr>
              <tr className="bg-purple-100">
                <td className="py-3 px-4 sm:py-4 sm:px-6 border border-purple-400">
                  4x4cm
                </td>
                <td className="py-3 px-4 sm:py-4 sm:px-6 border border-purple-400">
                  16
                </td>
              </tr>
              <tr className="bg-white">
                <td className="py-3 px-4 sm:py-4 sm:px-6 border border-purple-400">
                  4x6cm
                </td>
                <td className="py-3 px-4 sm:py-4 sm:px-6 border border-purple-400">
                  24
                </td>
              </tr>
              <tr className="bg-purple-100">
                <td className="py-3 px-4 sm:py-4 sm:px-6 border border-purple-400">
                  4x8cm
                </td>
                <td className="py-3 px-4 sm:py-4 sm:px-6 border border-purple-400">
                  32
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5: KeyBenefits */}
      <KeyBenefits />
    </div>
  );
}
