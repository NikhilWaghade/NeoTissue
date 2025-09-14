import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import KeyBenefits from "../components/KeyBenefits";
import dataimg1 from "../assets/prodata9.jpg";

export default function ProductData1() {
  return (
    <div className="font-roboto">
      {/* 1️⃣ Hero Section - Full Width */}
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
          XSONX® Wound Hygiene System
        </motion.h1>
      </section>

      {/* 2️⃣ Intro Box - Full Width */}
      <section className="w-full py-16 px-6">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-lg md:text-xl leading-relaxed text-white p-10 md:p-16 rounded-2xl text-center"
          style={{
            backgroundImage: "linear-gradient(to right, #ec4899, #8b5cf6)",
          }}
        >
          In response to the global wound care crisis, the XSONX® Wound Hygiene
          System offers a cutting-edge solution for effectively managing chronic
          and contaminated wounds. Combining advanced Vibrational Debridement
          Technology (VDT) with ease of use, this innovative tool significantly
          enhances the wound healing trajectory while ensuring patient comfort
          and cost-efficiency.
        </motion.p>
      </section>

      {/* 3️⃣ Key Benefits - Full Width */}
      <section className="py-16 px-6 w-full  bg-[#eee]">
        <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">
          Key Benefits of XSONX®
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/6764373d7f4cc78078d430bc_Frame%20(1).svg",
              title: "Advanced Vibrational Technology",
              desc: "Cordless system with micro-vibrational tech performing over 500 scrubs/sec.",
            },
            {
              img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/663dc49b78bdeaa8cee5b1b0_Clip%20path%20group.svg",
              title: "Pain Reduction",
              desc: "Reduces pain with vibrational analgesia, gentler than traditional methods.",
            },
            {
              img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/67644b066cd0fca2802e835d_Frame%20(2).svg",
              title: "Effective Slough Removal",
              desc: "Efficiently removes slough and biofilms for better healing trajectory.",
            },
            {
              img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/67644b39a80f649313085090_Frame%20(3).svg",
              title: "Cost-Effective & Easy",
              desc: "Reusable handpiece with single-use sleeves makes care simple & economical.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="p-8 py-14 border-2 text-center shadow-lg bg-white rounded-2xl"
              style={{
                borderImage: "linear-gradient(90deg,#D9207C,#662D91) 1",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4️⃣ Why Choose - Full Width */}
      <section className="py-16 px-6 w-full bg-purple-900">
        <h2 className="text-5xl font-bold text-center text-white mb-12">
          Why Choose XSONX®
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto items-stretch">
          {/* Left Big Card */}
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-between"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/689d92b4e2089588693ae3c9_676346cda2a823e550c2454d_Device-and-white-heads-with-labels-p-1600.webp"
              alt="XSONX Product"
              className="rounded-xl shadow-md w-full h-64 object-contain"
            />
            <div className="mt-6 space-y-3">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Comprehensive Wound Care
              </h3>
              <p className="text-black leading-relaxed">
                XSONX® is versatile, perfect for wound bed preparation prior to
                tissue grafting or in operating rooms. It's ideal as a step-up
                therapy for infected wounds and for routine maintenance to
                prevent stalled healing.
              </p>
            </div>
          </motion.div>

          {/* Right Side - 2 Cards */}
          <div className="flex flex-col gap-8">
            {/* Card 1 */}
            <motion.div className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-6">
              {/* Left Side - Image */}
              <img
                src="https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/689d92f86bc8ea5aa8e8a1a6_6763489650faff381d75d8b3_Group%201-p-1600.webp"
                alt="XSONX Kit"
                className="rounded-xl shadow-md w-40 h-40 object-contain flex-shrink-0"
              />
              {/* Right Side - Text */}
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Reusable and Reimbursable
                </h3>
                <p className="text-black leading-relaxed">
                  The reusable handpiece and cost-effective single-use
                  woundheads make XSONX® an economically smart choice for
                  healthcare facilities.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div className="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-6">
              {/* Left Side - Image */}
              <img
                src="https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/676346dad6261adff1f2a4c1_Debridement-Head-Large-Detail-dots.png"
                alt="Reusable Handpiece"
                className="rounded-xl shadow-md w-40 h-40 object-contain flex-shrink-0"
              />
              {/* Right Side - Text */}
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Expert-Endorsed
                </h3>
                <p className="text-black leading-relaxed">
                  Noted medical professionals, including Drs. John Lantis and
                  Callie Horn, have recognized the tool's effectiveness in
                  enhancing early tissue engraftment and reducing patient pain
                  compared to traditional methods.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5️⃣ Testimonials - Full Width */}
      <section className="py-16 px-6 w-full bg-[#eee]">
        <h2
          className="text-5xl font-bold text-center mb-12 
  bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent"
        >
          Testimonials
        </h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          className="relative"
        >
          {[
            {
              quote:
                "Sonic vibrations loosen slough and biofilms with less pain and greater effectiveness than gauze alone.",
              name: "James McGuire",
              role: "DPM, LPT, CPed",
            },
            {
              quote:
                "Finally, a new helpful tool to painlessly and easily remove slough from any wound.",
              name: "Erik Maus",
              role: "MD, Medical Director of Wound Care",
            },
            {
              quote:
                "XSONX® has completely changed how we manage chronic wounds. Patients experience less discomfort.",
              name: "Dr. Anna Lee",
              role: "Wound Care Specialist",
            },
            {
              quote:
                "A reliable, efficient, and cost-effective solution that fits perfectly in our clinical workflows.",
              name: "Dr. Michael Brown",
              role: "Chief Surgeon",
            },
          ].map((item, i) => (
            <SwiperSlide key={i}>
              <div className="h-full max-w- mx-auto text-center p-8  flex flex-col justify-center">
                <p className="text-2xl italic text-black  mb-4">{item.quote}</p>
                <h4 className="text-xl font-bold text-purple-900">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-600">{item.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 6️⃣ Call To Action - Full Width */}
      <section className="py-16 flex justify-center w-full bg-gray-100">
        <div
          className="p-20 px-40 rounded-2xl text-center text-white max-w-5xl w-full"
          style={{
            backgroundImage: "linear-gradient(135deg, #D9207C, #662D91)",
          }}
        >
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Future of Wound Care
          </motion.h2>
          <p className="mb-8 text-lg">
            Explore how XSONX® can transform your wound care practices
            contacting us directly. For more information or to schedule a free
            in-service, reach out to info@lifebiologicsusa.com.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 font-bold rounded-lg shadow text-white bg-gradient-to-r from-pink-500 to-purple-700 hover:opacity-90 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      <KeyBenefits />
    </div>
  );
}
