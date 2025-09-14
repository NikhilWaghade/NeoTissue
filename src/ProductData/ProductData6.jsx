import React from "react";
// import productImg2 from "../assets/prodata9.jpg";
import dataimg1 from "../assets/prodata9.jpg";
import productImg3 from "../assets/productImg3.png";
import { ProductHero } from "../ProductData/ProductHero";
import KeyBenefits from "../components/KeyBenefits";

export default function ProductData6() {
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
      title: " Full Thickness",
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/6764373d7f4cc78078d430bc_Frame%20(1).svg",
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
      {/* Hero Section */}
      <ProductHero title={<>Activate™</>} bgImage={dataimg1} />

      {/* Section 2: Left text, right image */}
      <section className="py-16 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side Text */}
        <div className="md:w-1/2">
          <p className="text-5xl text-black">
            Activate™ is a dehydrated full thickness placental allograft which
            serves as a wound cover or barrier, protecting the wound from the
            environment.
          </p>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 flex flex-col items-center">
          <img
            src={productImg3}
            alt="Simplimax Product"
            className="rounded-xl shadow-lg mb-6"
          />
          <p className="text-lg text-black text-center">
            Activate™ is a full thickness placental-derived allograft composed
            of: Amnion Intermediate Chorion layersThese layers are processed to
            cleanse and decellularize the tissue while preserving essential
            structural proteins and growth factors of the fetal basement
            membrane. It uses a gentle, non-oxidative dehydration process to
            minimize protein denaturing and maintain structural integrity of the
            extracellular matrix. The product serves as a natural biological
            scaffold and is provided sterile with a five-year shelf life when
            stored as instructed.
          </p>
        </div>
      </section>

      {/* Section 3: Key Features */}
      <section className="py-16 bg-gray-100 px-6">
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

      {/* Section 4: Available Sizes */}
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

      {/* section 5  */}
      <KeyBenefits />
    </div>
  );
}
