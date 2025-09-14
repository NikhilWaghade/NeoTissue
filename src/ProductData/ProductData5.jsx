import React from "react";
import dataimg1 from "../assets/prodata9.jpg";
import productImg5 from "../assets/productImg5.png";
import { ProductHero } from "../ProductData/ProductHero";
import KeyBenefits from "../components/KeyBenefits";

export default function ProductData5() {
  const featureBoxes = [
    { title: "Flexible", img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/663e8355fec842ab62f125d2_Group%202.svg" },
    { title: "Protective Covering", img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/663e83553bafc66bdc1a1bf0_Group%204.svg" },
    { title: "Lyophilized", img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/67f663b691d6986906d1e01f_Frame%20(4).svg" },
    { title: "Ambient Temperature Storage", img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/67f65b43a62abfaccfd9abba_Frame%20(2).svg" },
    { title: "Terminally Sterilized", img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/67f65ac823535dc33e8672f7_Frame.svg" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <ProductHero title={<>XCELL Amnio Matrix™</>} bgImage={dataimg1} />

      {/* Section 2: Left text, right image */}
      <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Side Text */}
        <div className="md:w-1/2 flex items-center">
          <p className="text-xl md:text-4xl font-bold text-black leading-snug">
            XCELL Amnio Matrix™ is a lyophilized Amniotic Allograft which serves
            as a wound cover or barrier, protecting the wound from the
            environment.
          </p>
        </div>

        {/* Right Side Image + Paragraph */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <img
            src={productImg5}
            alt="XCELL Amnio Matrix Product"
            className="rounded-xl shadow-lg mb-6 w-full max-w-lg"
          />
          <p className="text-sm md:text-lg text-black">
            XCELL Amnio Matrix™ is an advanced allograft designed to support
            tissue repair and regeneration by employing refined processing
            techniques that maintain key biological properties. Developed with a
            strong focus on safety and biocompatibility, it facilitates tissue
            integration and may provide support during the healing process. With
            its innovative composition, XCELL Amnio Matrix™ represents a
            promising option for advanced wound care applications.
          </p>
        </div>
      </section>

      {/* Section 3: Key Features */}
      <section className="py-16 bg-gray-100 px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700">
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
                <h3 className="font-bold text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Available Sizes */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-700 text-center">
          Available Sizes
        </h2>
        <div className="flex justify-center">
          <table className="w-72 md:w-96 border border-purple-400 border-collapse text-left text-sm md:text-base">
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
                <td className="py-4 px-6 border border-purple-400 md:p-8">2x2cm</td>
                <td className="py-4 px-6 border border-purple-400">4</td>
              </tr>
              <tr className="bg-white">
                <td className="py-4 px-6 border border-purple-400 md:p-8">2x3cm</td>
                <td className="py-4 px-6 border border-purple-400">6</td>
              </tr>
              <tr className="bg-purple-100">
                <td className="py-4 px-6 border border-purple-400 md:p-8">4x4cm</td>
                <td className="py-4 px-6 border border-purple-400">16</td>
              </tr>
              <tr className="bg-white">
                <td className="py-4 px-6 border border-purple-400 md:p-8">4x6cm</td>
                <td className="py-4 px-6 border border-purple-400">24</td>
              </tr>
              <tr className="bg-purple-100">
                <td className="py-4 px-6 border border-purple-400 md:p-8">4x8cm</td>
                <td className="py-4 px-6 border border-purple-400">32</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Section 5 */}
      <KeyBenefits />
    </div>
  );
}
