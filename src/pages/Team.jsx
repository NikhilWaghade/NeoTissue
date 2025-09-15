import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import { Link } from "react-router-dom";
import KeyBenefits from "../components/KeyBenefits";

export default function Team() {
  const teamMembers = [
    {
      img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/6752086d91c0a38fa318e3cf_664131efcf250cf6a072e85a_Man.svg",
      name: "Shimon Sebag",
      role: "Founder & Executive Chairman",
      desc: "Established NeoTissue Biosciences Inc. and oversees strategic growth, vision, and board leadership.",
    },
    {
      img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/67520b0b183137ea66cbb69f_673e55664903f84c9817dd09_avatar.svg",
      name: "Dr. Sarah Levinson",
      role: "Chief Executive Officer (CEO)",
      desc: "Provides strategic leadership and drives the company’s mission across all divisions.",
    },
    {
      img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/6752086d91c0a38fa318e3cf_664131efcf250cf6a072e85a_Man.svg",
      name: "Rivka S",
      role: "Chief Financial Officer (CFO)",
      desc: "Manages corporate finance, compliance, and investor relations.",
    },

    // Medical & Clinical Affairs
    {
      img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/67520b0b183137ea66cbb69f_673e55664903f84c9817dd09_avatar.svg",
      name: "Dr. Daniel Cohen",
      role: "Chief Medical Officer (CMO)",
      desc: "Leads clinical strategy, medical oversight, and patient outcome optimization.",
    },
    {
      img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/6752086d91c0a38fa318e3cf_664131efcf250cf6a072e85a_Man.svg",
      name: "Dr. Rebecca Martinez",
      role: "Director of Clinical Research",
      desc: "Manages clinical trials, safety studies, and regulatory submissions.",
    },
    {
      img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/6752086d91c0a38fa318e3cf_664131efcf250cf6a072e85a_Man.svg",
      name: "Dr. Michael Tanaka",
      role: "Medical Science Liaison",
      desc: "Bridges clinical evidence with physician education and product adoption.",
    },

    // Business Development & Sales
    {
      img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/67520b0b183137ea66cbb69f_673e55664903f84c9817dd09_avatar.svg",
      name: "Rachel Stein",
      role: "Vice President of Business Development",
      desc: "Builds partnerships with hospitals, distributors, and healthcare networks.",
    },
    {
      img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/6752086d91c0a38fa318e3cf_664131efcf250cf6a072e85a_Man.svg",
      name: "David Kaplan",
      role: "National Sales Director",
      desc: "Oversees sales team performance and territory expansion.",
    },
    {
      img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/6752086d91c0a38fa318e3cf_664131efcf250cf6a072e85a_Man.svg",
      name: "Melissa Brown",
      role: "Regional Account Manager",
      desc: "Manages key hospital accounts and wound care clinic relationships.",
    },

    // Operations & Compliance
    {
      img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/67520b0b183137ea66cbb69f_673e55664903f84c9817dd09_avatar.svg",
      name: "Jonathan Weiss",
      role: "Director of Operations",
      desc: "Oversees logistics, procurement, and distribution of skin substitute products.",
    },
    {
      img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/6752086d91c0a38fa318e3cf_664131efcf250cf6a072e85a_Man.svg",
      name: "Sophia Chen",
      role: "Quality & Regulatory Affairs Manager",
      desc: "Ensures FDA compliance, quality control, and regulatory documentation.",
    },

    // Marketing & Administration
    {
      img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/67520b0b183137ea66cbb69f_673e55664903f84c9817dd09_avatar.svg",
      name: "Emily Johnson",
      role: "Marketing & Communications Manager",
      desc: "Drives brand presence, educational content, and digital outreach.",
    },
    {
      img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/6752086d91c0a38fa318e3cf_664131efcf250cf6a072e85a_Man.svg",
      name: "Jason Miller",
      role: "Administrative & HR Manager",
      desc: "Handles recruitment, employee support, and internal compliance.",
    },
  ];

  return (
    <div>
      {/* ✅ Hero Section */}
      <section
        className="text-center py-40 px-6"
        style={{
          backgroundImage: "linear-gradient(90deg, #ffdeed, #e3bdff)",
        }}
      >
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-5xl font-extrabold text-black"
        >
          The People Behind Neotissue <br />
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg md:text-2xl text-gray-800 max-w-3xl mx-auto"
        >
          The dedicated professionals pioneering breakthroughs in advanced{" "}
          <br /> wound care.
        </motion.p>
      </section>

      {/* ✅ Team Grid */}
      <section className="p-10 max-w-7xl mx-auto text-center">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
            >
              {/* Inner card */}
              <div className="p-6 bg-white rounded-2xl h-full flex flex-col">
                {/* Circle Image */}
                <div className="w-32 h-32 mx-auto rounded-full p-[3px] bg-gradient-to-r from-pink-500 to-purple-600">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Name */}
                <h3 className="mt-4 text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  {member.name}
                </h3>

                {/* Role Box */}
                <div
                  className="mt-4 text-purple-700 px-4 py-2 text-sm font-semibold"
                  style={{
                    backgroundColor: "#f3e8ff",
                    border: "2px solid transparent",
                    borderImage:
                      "linear-gradient(to right, #ec4899, #8b5cf6) 1",
                  }}
                >
                  {member.role}
                </div>

                {/* Description Box */}
                <div
                  className="mt-3 text-purple-700 px-4 py-3 text-sm leading-relaxed flex-1"
                  style={{
                    backgroundColor: "#f3e8ff",
                    border: "2px solid transparent",
                    borderImage:
                      "linear-gradient(to right, #ec4899, #8b5cf6) 1",
                  }}
                >
                  {member.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <KeyBenefits />
    </div>
  );
}
