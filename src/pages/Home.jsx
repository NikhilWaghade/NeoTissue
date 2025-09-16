import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import bg_video from "../assets/bg_video4.mp4";
import features_img from "../assets/features_img.png";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const features = [
    {
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/65dd7b4488cf6395814e2f88_Frame.svg",
      title: "Cutting-edge Human Amniotic Tissue Grafts",
      desc: "Neotissue are highly biocompatible, easy to use, and effective in wound healing.",
    },
    {
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/65dd7b44b84f8c6a2962c8e3_Frame-1.svg",
      title: "Cutting-Edge Wound Care Solutions",
      desc: "Neotissue provide advanced treatment options for patients in need of wound care.",
    },
    {
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/65dd7b4475462a6c7f120a89_Frame-2.svg",
      title: "Enhance Wound Healing with Neotissue",
      desc: "Neotissue are designed to enhance the natural wound healing process.",
    },
    {
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/65de29be3840fbb886f8d7dd_Frame.svg",
      title: "Streamlining Reimbursement",
      desc: "Neotissue provides fast reimbursement support for healthcare providers.",
    },
    {
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/65de29bef87cfe044c5d271b_Frame-1.svg",
      title: "Learning and Academic Pursuits",
      desc: "Neotissue offers educational resources, patient information, and clinical applications.",
    },
    {
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/65df6a9e003911b97babc298_Frame%20(1).svg",
      title: "Versatile Medical Solutions",
      desc: "Explore our advanced amniotic tissue products for various medical needs.",
    },
  ];

  // fourth section
  const rightFeatures = [
    {
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/65dd7209916442c31dd8f5b1_Frame.svg",
      title: "Streamlined Process",
      desc: "Neotissue  takes Placental tissue and uses advanced techniques to create high-quality grafts.",
    },
    {
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/65dd72097a91d9431c70cf6e_Frame-1.svg",
      title: "Quality Assurance",
      desc: "Our grafts undergo rigorous testing to ensure safety and efficacy.",
    },
    {
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/65dd72094ea675352765e762_Frame-2.svg",
      title: "Expert Service",
      desc: "Our team of specialists is dedicated to helping your team with support and education in advanced wound care solutions.",
    },
    {
      img: "https://cdn.prod.website-files.com/65dd69e5c5c0b3458916abfc/65dd7209621f007cd63d2c29_Frame-3.svg",
      title: "Continuous Improvement",
      desc: "We are constantly researching and innovating to enhance our grafts and processes.",
    },
  ];

  // fifth section
  const faqs = [
    {
      question: "What is amniotic tissue?",
      answer:
        "Amniotic tissue is a type of regenerative material derived from the placenta. It contains growth factors and other bioactive components that promote healing and tissue regeneration.",
    },
    {
      question: "How are amniotic tissue grafts used?",
      answer:
        "Amniotic tissue grafts are used in wound care to promote healing and tissue regeneration. They can be applied topically or used in surgical procedures to enhance the body's natural healing process.",
    },
    {
      question: "Are amniotic tissue grafts safe?",
      answer:
        "Yes, amniotic tissue grafts are considered safe. The tissue is thoroughly screened and processed to ensure it meets the highest quality and safety standards.",
    },
    {
      question: "Are amniotic tissue grafts effective?",
      answer:
        "Yes, amniotic tissue grafts have been shown to be effective in promoting wound healing and tissue regeneration. They provide a rich source of growth factors and bioactive components that support the body's natural healing process.",
    },
    {
      question: "How can I get amniotic tissue grafts?",
      answer:
        "To learn more about how to access amniotic tissue grafts for wound care, please contact our team. We will be happy to provide you with the information and assistance you need.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="bg-gradient-to-br from-purple-900 to-pink-700 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-10 xl:px-0 overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={bg_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full text-left text-white">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ staggerChildren: 0.3 }}
            className="w-full text-left flex flex-col items-start justify-center"
          >
            <h1 className="text-4xl md:text-5xl xl:text-7xl  lg:leading font-medium font-roboto max-w-3xl mt-8 xl:mt-16">
              Revolutionizing <br />
              <span className="text-pink-400 font-semibold">
                wound care
              </span>{" "}
              with advanced biologics
            </h1>

            <p className="text-lg md:text-xl max-w-2xl mb-16 mt-4 font-roboto">
              NeoTissue pioneers the use of Amniotic tissue to create high
              quality tissue grafts for advanced wound care.
            </p>

            <div>
              <Link
                to="/products"
                className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 duration-300 rounded-lg text-lg font-medium hover:bg-pink-400 transition"
              >
                Our Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-12 md:py-24 px-6"
        style={{
          backgroundImage: "linear-gradient(90deg, #ffdeed, #e3bdff)",
        }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-purple-900 md:leading-tight">
              Transforming <span className="text-black"> Wound Care</span> with
              Advanced Skin Substitutes
            </h2>
            <p className="text-gray-800 leading-relaxed ">
              NeoTissue advanced skin substitutes offer a breakthrough solution
              for patients. With our high-quality human amniotic tissue, we
              provide cutting-edge wound care treatments that deliver superior
              outcomes.
            </p>

            <ul className="space-y-4 text-gray-900 font-medium">
              {/* Item 1 */}
              <li className="flex items-center gap-3">
                <span className="w-6 h-6">
                  {/* First SVG Icon */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_3_92)">
                      <path
                        d="M23.778 14.482L21.491 4.523C21.361 3.978 20.867 3.433 20.322 3.275L9.86995 0.051C9.73995 0 9.58395 0 9.42595 0C8.98295 0 8.51695 0.18 8.20395 0.443L0.715952 7.412C0.299952 7.776 0.0919517 8.504 0.221952 9.024L2.66695 19.686C2.79695 20.231 3.29095 20.778 3.83595 20.934L13.611 23.949C13.741 24 13.896 24 14.054 24C14.497 24 14.964 23.82 15.277 23.557L23.284 16.122C23.702 15.732 23.908 15.03 23.778 14.482ZM10.962 2.417L18.137 4.627C18.422 4.707 18.422 4.837 18.137 4.913L14.367 5.771C14.082 5.851 13.693 5.721 13.484 5.511L10.858 2.677C10.623 2.445 10.674 2.341 10.962 2.417ZM15.432 15.289C15.511 15.575 15.327 15.733 15.042 15.654L7.29395 13.262C7.00895 13.183 6.95595 12.949 7.16395 12.742L13.094 7.228C13.303 7.019 13.537 7.098 13.614 7.384L15.432 15.289ZM2.66695 8.267L8.95995 2.417C9.16995 2.208 9.50495 2.237 9.71395 2.442L12.86 5.85C13.069 6.06 13.04 6.395 12.834 6.604L6.54095 12.454C6.33095 12.664 5.99595 12.635 5.78695 12.429L2.63995 9.024C2.54312 8.92012 2.49146 8.78205 2.49634 8.64012C2.50121 8.49819 2.56222 8.36399 2.66595 8.267H2.66695ZM4.20295 17.551L2.53995 10.244C2.45995 9.959 2.58995 9.904 2.77395 10.114L5.39995 12.949C5.60895 13.158 5.68495 13.573 5.60895 13.858L4.46195 17.55C4.38295 17.835 4.25395 17.835 4.20195 17.55L4.20295 17.551ZM13.405 21.815L5.18795 19.293C5.05089 19.2507 4.93594 19.1562 4.86785 19.03C4.79977 18.9037 4.784 18.7558 4.82395 18.618L6.20195 14.197C6.24406 14.0598 6.33843 13.9446 6.46471 13.8763C6.59099 13.808 6.73905 13.7921 6.87695 13.832L15.093 16.354C15.378 16.433 15.536 16.744 15.457 17.029L14.08 21.45C14.0365 21.5861 13.9421 21.7002 13.8164 21.7682C13.6908 21.8363 13.5437 21.853 13.406 21.815H13.405ZM20.684 15.835L15.2 20.93C14.991 21.139 14.89 21.06 14.966 20.775L16.11 17.081C16.189 16.796 16.5 16.508 16.784 16.457L20.554 15.599C20.842 15.523 20.893 15.653 20.684 15.833V15.835ZM21.282 14.745L16.759 15.784C16.6907 15.8013 16.6196 15.805 16.5499 15.7948C16.4802 15.7845 16.4132 15.7606 16.3528 15.7243C16.2923 15.6881 16.2397 15.6402 16.1978 15.5835C16.156 15.5268 16.1258 15.4624 16.109 15.394L14.187 7.022C14.1696 6.9537 14.1659 6.88265 14.1762 6.81294C14.1864 6.74322 14.2104 6.67622 14.2466 6.6158C14.2829 6.55538 14.3307 6.50273 14.3874 6.46088C14.4441 6.41904 14.5085 6.38883 14.577 6.372L19.1 5.335C19.1682 5.3178 19.2391 5.31426 19.3087 5.32457C19.3783 5.33488 19.4452 5.35885 19.5055 5.39509C19.5658 5.43133 19.6184 5.47913 19.6602 5.53575C19.7019 5.59237 19.7321 5.65668 19.749 5.725L21.672 14.096C21.751 14.406 21.57 14.692 21.282 14.746V14.745Z"
                        fill="url(#paint0_linear_3_92)"
                      ></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_3_92"
                        x1="12"
                        y1="0"
                        x2="12"
                        y2="24"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#ED1E79"></stop>
                        <stop offset="0.9999" stop-color="#662D91"></stop>
                        <stop offset="1" stop-opacity="0"></stop>
                      </linearGradient>
                      <clipPath id="clip0_3_92">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                Reduces Infection Risk
              </li>

              {/* Item 2 */}
              <li className="flex items-center gap-3">
                <span className="w-6 h-6">
                  {/* Second SVG Icon */}
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.008 6C14.603 6 16.318 7.263 17.591 8.726L17.839 9.019C17.921 9.12 18.003 9.219 18.081 9.319C18.515 9.888 18.89 10.465 19.251 10.993C19.491 11.349 19.716 11.686 19.94 12.001L20.167 12.321C20.241 12.426 20.315 12.532 20.407 12.631C21.335 13.802 22.296 14.531 23.69 14.622C24.0907 12.8976 24.0907 11.1044 23.69 9.38C22.295 9.471 21.335 10.199 20.389 11.371C20.209 11.125 20.032 10.861 19.834 10.575C19.4225 9.94012 18.982 9.32447 18.514 8.73C19.52 7.561 20.764 6.555 22.446 6.173C20.453 2.49 16.523 0 12.008 0C7.50803 0 3.56803 2.49 1.51803 6.173C3.19903 6.557 4.44103 7.561 5.44903 8.729C5.53503 8.819 5.61703 8.909 5.69803 9.014L5.93503 9.314C6.41403 9.929 6.84903 10.559 7.24003 11.159L7.79503 11.985L8.03503 12.314C8.10903 12.418 8.20003 12.524 8.27403 12.629C9.32503 14.068 10.389 15.059 12.024 15.059C13.674 15.059 14.725 14.069 15.789 12.629L16.164 13.184C16.615 13.844 17.096 14.564 17.619 15.239C16.346 16.71 14.619 17.969 12.024 17.969C9.43003 17.969 7.72003 16.694 6.44503 15.239L6.20503 14.939L5.96503 14.639C5.53003 14.069 5.15503 13.485 4.79503 12.959C4.57054 12.6202 4.34084 12.2848 4.10603 11.953L3.88003 11.623C3.80603 11.519 3.73103 11.413 3.64003 11.309C2.66403 10.2 1.70303 9.465 0.309033 9.375C0.114033 10.224 0.0090332 11.1 0.0090332 12C0.0090332 12.9 0.111033 13.776 0.299033 14.621C1.69703 14.53 2.65403 13.802 3.59403 12.63C3.76603 12.876 3.94803 13.14 4.13803 13.426C4.51303 13.992 4.94403 14.634 5.45103 15.271C4.44203 16.44 3.19803 17.446 1.52103 17.828C2.55849 19.6996 4.07833 21.2592 5.92257 22.3446C7.7668 23.43 9.8681 24.0016 12.008 24C16.523 24 20.449 21.51 22.498 17.827C20.818 17.443 19.576 16.439 18.568 15.271C18.482 15.181 18.398 15.091 18.318 14.986L18.082 14.686C17.6204 14.0903 17.185 13.4747 16.777 12.841L16.223 12C16.1485 11.8886 16.0718 11.7785 15.993 11.67C15.9169 11.5608 15.8395 11.4525 15.761 11.345C14.71 9.905 13.661 8.914 12.011 8.914C10.361 8.914 9.31203 9.904 8.26103 11.345L7.88603 10.785C7.43329 10.0762 6.94742 9.3891 6.43003 8.726C7.70303 7.263 9.38303 6 12.008 6Z"
                      fill="url(#paint0_linear_3_88)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_3_88"
                        x1="12"
                        y1="0"
                        x2="12"
                        y2="24"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#ED1E79" />
                        <stop offset="1" stopColor="#662D91" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                Enhances Tissue Regeneration
              </li>
            </ul>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="px-4 sm:px-12"
          >
            <img
              src={features_img}
              alt="Wound Care"
              className="rounded-lg shadow-xl hover:scale-105 transition w-full h-auto max-h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* third section  */}
      <section className="py-12 md:py-24 px-3 sm:px-6 md:px-10 xl:px-0 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              className="p-6 borde rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition flex flex-col items-center text-center bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              style={{
                borderColor: "#ed1e79",
              }}
            >
              {/* Centered Image */}
              <div className="mb-4 flex justify-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16"
                  loading="lazy"
                />
              </div>

              {/* Title with responsive font size */}
              <h3
                className="mb-2 text-xl md:text-2xl  font-bold leading-snug mt-4"
                style={{
                  fontFamily: "Roboto, sans-serif",
                  background: "linear-gradient(90deg, #ed1e79, #662d91)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-800">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* fourth section  */}
      <section className="py-12 md:py-24 px-3 sm:px-6 md:px-10 xl:px-0 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Side Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6 text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold lg:leading-tight text-black xl:mt-8">
              Transforming Placental <br className="hidden sm:block" />
              tissue into{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #ed1e79, #662d91)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Life-Saving Grafts
              </span>
            </h2>
          </motion.div>

          {/* Right Side Features */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {rightFeatures.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex items-start space-x-4 p-4 py-8 transform transition rounded-lg relative"
              >
                {/* Left Side: Image + Border */}
                <div className="flex flex-col items-center ">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-16 sm:w-20 md:w-12 z-10 "
                  />
                  {/* Vertical border */}
                  <div className="absolute top-20 sm:top-24 left-8 transform -translate-x-1/2 w-0.5 bg-black h-16"></div>
                </div>

                {/* Right Side: Heading and Paragraph */}
                <div className="flex flex-col">
                  <h3
                    className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-800 text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* fifth section  */}
      <section className="py-10 sm:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto rounded-3xl">
          <motion.div
            className="rounded-3xl text-white text-center shadow-lg px-4 py-12 md:px-12 md:py-20 lg:px-32 lg:py-28 xl:px-48"
            style={{
              background: "linear-gradient(90deg, #ed1e79, #662d91)",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-white leading-snug">
              Discover Our Advanced Biologic Products
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white max-w-xl mx-auto">
              Neotissue pioneers high-quality human amniotic tissue grafts for
              advanced wound care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* six section  */}
      <section className="py-12 md:py-24 px-3 sm:px-6 md:px-10 xl:px-0 bg-gray-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Content - stagger animation */}
          <div className="">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl xl:text-5xl font-bold text-black"
            >
              Amniotic
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-800 leading-relaxed mt-4 max-w-xl"
            >
              Find answers to common questions about amniotic tissue grafts and
              learn more about their benefits for wound care.
            </motion.p>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-20"
            >
              <Link
                to={"/contact"}
                className="px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-700 text-white font-semibold rounded-lg hover:scale-105 transition"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Right FAQ Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative p-4 rounded-xl cursor-pointer hover:shadow-lg transition"
                onClick={() => toggleFAQ(index)}
                style={{
                  borderWidth: "2px",
                  borderStyle: "solid ",
                  borderImage: "linear-gradient(90deg, #ed1e79, #662d91) 1",
                }}
              >
                <div className="flex items-center justify-between">
                  {/* Question */}
                  <h4 className="text-lg font-semibold text-black">
                    {faq.question}
                  </h4>

                  {/* Clickable SVG Icon on Right */}
                  <div className="flex-shrink-0 ml-4">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 28H13C12.4697 27.9995 11.9613 27.7886 11.5864 27.4136C11.2114 27.0387 11.0005 26.5303 11 26V21H6C5.46973 20.9995 4.96133 20.7886 4.58637 20.4136C4.21141 20.0387 4.00053 19.5303 4 19V13C4.00053 12.4697 4.21141 11.9613 4.58637 11.5864C4.96133 11.2114 5.46973 11.0005 6 11H11V6C11.0005 5.46973 11.2114 4.96133 11.5864 4.58637C11.9613 4.21141 12.4697 4.00053 13 4H19C19.5303 4.00053 20.0387 4.21141 20.4136 4.58637C20.7886 4.9613 20.9995 5.46973 21 6V11H26C26.5303 11.0005 27.0387 11.2114 27.4136 11.5864C27.7886 11.9613 27.9995 12.4697 28 13V19C27.9992 19.5302 27.7882 20.0384 27.4133 20.4133C27.0384 20.7882 26.5302 20.9992 26 21H21V26C20.9992 26.5302 20.7882 27.0384 20.4133 27.4133C20.0384 27.7882 19.5302 27.9992 19 28ZM6 13V19H13V26H19V19H26V13H19V6H13V13H6Z"
                        fill="url(#paint0_linear_4_113)"
                      ></path>
                      <defs>
                        <linearGradient
                          id="paint0_linear_4_113"
                          x1="28"
                          y1="16.8045"
                          x2="3.99982"
                          y2="16.7317"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#662D91"></stop>
                          <stop offset="0.96032" stopColor="#D9207C"></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Answer - Toggle */}
                {activeIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-2 text-gray-700 text-sm"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
