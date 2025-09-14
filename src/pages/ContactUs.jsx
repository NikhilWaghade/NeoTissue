import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import bg_video from "../assets/bg_video.mp4";

export default function ContactUs() {
  return (
    <section>
      {/* ✅ Hero Section with Background Video */}
      <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
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
        <div className="relative z-10 max-w-2xl text-left text-white">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-4xl md:text-6xl font-bold leading-tight font-roboto"
          >
            Get in Touch with <br />{" "}
            <span className="text-pink-400">Neotissue </span>
            biologics
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg md:text-xl"
          >
            NeoTissue Biologics pioneers the use of Amniotic tissue to create
            high-quality human amniotic tissue grafts for advanced wound care.
          </motion.p>

          <motion.a
            href="/products"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.6 }}
            className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500  duration-300 rounded-lg text-lg font-medium hover:bg-pink-400 transition"
          >
            Our Products
          </motion.a>
        </div>
      </section>

      {/* ✅ Contact Section with Gradient BG */}
      <section
        className="py-16 px-6 md:px-16"
        style={{
          backgroundImage: "linear-gradient(90deg, #ffdeed, #e3bdff)",
        }}
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* ✅ Left Side - Contact Info */}
          <div className="space-y-10">
            {/* Email */}
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-4"
              >
                <path
                  d="M28 6H4C3.73478 6 3.48043 6.10536 3.29289 6.29289C3.10536 6.48043 3 6.73478 3 7V24C3 24.5304 3.21071 25.0391 3.58579 25.4142C3.96086 25.7893 4.46957 26 5 26H27C27.5304 26 28.0391 25.7893 28.4142 25.4142C28.7893 25.0391 29 24.5304 29 24V7C29 6.73478 28.8946 6.48043 28.7071 6.29289C28.5196 6.10536 28.2652 6 28 6ZM16 16.6437L6.57125 8H25.4287L16 16.6437ZM12.3387 16L5 22.7262V9.27375L12.3387 16ZM13.8188 17.3563L15.3188 18.7375C15.5032 18.9069 15.7446 19.0008 15.995 19.0008C16.2454 19.0008 16.4868 18.9069 16.6712 18.7375L18.1712 17.3563L25.4212 24H6.57125L13.8188 17.3563ZM19.6612 16L27 9.2725V22.7275L19.6612 16Z"
                  fill="url(#paint0_linear_6_2)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_6_2"
                    x1="29"
                    y1="16.6704"
                    x2="2.99997"
                    y2="16.5679"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D9207C"></stop>
                    <stop offset="1" stopColor="#662D91"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <h2 className="text-xl font-bold text-purple-900">Email</h2>
              <p className="text-gray-700">
                For general inquiries, email us at:
              </p>
              <p className="font-semibold text-purple-900">
                Care@NeoTissuebio.com
              </p>
            </div>

            {/* Call */}
            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mb-4"
              >
                <path
                  d="M26 29H25.83C6.18 27.87 3.39 11.29 3 6.23C2.96858 5.83658 3.01509 5.44082 3.13688 5.06541C3.25866 4.69 3.45333 4.3423 3.70972 4.04225C3.96611 3.7422 4.27919 3.49569 4.63101 3.31684C4.98284 3.13799 5.3665 3.03032 5.76 3H11.27C11.6706 2.99961 12.062 3.11951 12.3936 3.34416C12.7253 3.56881 12.9818 3.88787 13.13 4.26L14.65 8C14.7964 8.36355 14.8327 8.76208 14.7544 9.14609C14.6762 9.5301 14.4869 9.88267 14.21 10.16L12.08 12.31C12.4127 14.2007 13.3182 15.9437 14.6739 17.303C16.0296 18.6622 17.7701 19.5723 19.66 19.91L21.83 17.76C22.1115 17.4862 22.4674 17.3013 22.8533 17.2283C23.2392 17.1554 23.638 17.1977 24 17.35L27.77 18.86C28.1365 19.0129 28.4492 19.2714 28.6683 19.6027C28.8873 19.9339 29.0028 20.3229 29 20.72V26C29 26.7956 28.6839 27.5587 28.1213 28.1213C27.5587 28.6839 26.7957 29 26 29ZM6 5C5.73479 5 5.48043 5.10536 5.2929 5.29289C5.10536 5.48043 5 5.73478 5 6V6.08C5.46 12 8.41 26 25.94 27C26.0714 27.0081 26.2031 26.9902 26.3275 26.9473C26.4519 26.9045 26.5667 26.8374 26.6652 26.7501C26.7637 26.6628 26.8439 26.5568 26.9014 26.4384C26.9588 26.32 26.9924 26.1914 27 26.06V20.72L23.23 19.21L20.36 22.06L19.88 22C11.18 20.91 10 12.21 10 12.12L9.94 11.64L12.78 8.77L11.28 5H6Z"
                  fill="url(#paint0_linear_6_4)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_6_4"
                    x1="29.0001"
                    y1="16.8715"
                    x2="2.99028"
                    y2="16.7926"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#D9207C"></stop>
                    <stop offset="1" stopColor="#662D91"></stop>
                  </linearGradient>
                </defs>
              </svg>
              <h2 className="text-xl font-bold text-purple-900">Call</h2>
              <p className="text-gray-700">For urgent matters, call us at:</p>
              <p className="font-semibold text-purple-900">+1-800-232-5156</p>
            </div>
          </div>

          {/* ✅ Right Side - Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="p-4 sm:p-6 md:p-10 lg:p-12 rounded-2xl"
          >
            {/* Form */}
            <form className="space-y-3">
              {/* Name */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium text-gray-700">Name*</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium text-gray-700">
                  Phone Number*
                </label>
                <input
                  type="number"
                  placeholder="Your Phone Number"
                  className="w-full p-3 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium text-gray-700">Email*</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-purple-500 transition"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="mb-2 font-medium text-gray-700">
                  Message*
                </label>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-3 border-2 border-gray-500 rounded-lg focus:outline-none focus:border-purple-500 transition"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="w-28 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-500 transition text-lg">
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
