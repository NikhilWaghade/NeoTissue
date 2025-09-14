import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";
import { Link } from "react-router-dom";
import KeyBenefits from "../components/KeyBenefits";

export default function Team() {
  const teamMembers = [
    { img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/6752086d91c0a38fa318e3cf_664131efcf250cf6a072e85a_Man.svg", name: "Team Member 1", role: "Specialist Role" },
    { img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/67520b0b183137ea66cbb69f_673e55664903f84c9817dd09_avatar.svg", name: "Team Member 2", role: "Specialist Role" },
    { img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/6752086d91c0a38fa318e3cf_664131efcf250cf6a072e85a_Man.svg", name: "Team Member 3", role: "Specialist Role" },
    { img: "/team4.jpg", name: "Team Member 4", role: "Specialist Role" },
    { img: "/team5.jpg", name: "Team Member 5", role: "Specialist Role" },
    { img: "/team6.jpg", name: "Team Member 6", role: "Specialist Role" },
    { img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/6752086d91c0a38fa318e3cf_664131efcf250cf6a072e85a_Man.svg", name: "Team Member 7", role: "Specialist Role" },
    { img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/67520b0b183137ea66cbb69f_673e55664903f84c9817dd09_avatar.svg", name: "Team Member 8", role: "Specialist Role" },
    { img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/6752086d91c0a38fa318e3cf_664131efcf250cf6a072e85a_Man.svg", name: "Team Member 9", role: "Specialist Role" },
    { img: "/team10.jpg", name: "Team Member 10", role: "Specialist Role" },
    { img: "/team11.jpg", name: "Team Member 11", role: "Specialist Role" },
    { img: "/team12.jpg", name: "Team Member 12", role: "Specialist Role" },
    { img: "https://cdn.prod.website-files.com/6751ff02c163292790bd16bf/6752086d91c0a38fa318e3cf_664131efcf250cf6a072e85a_Man.svg", name: "Team Member 13", role: "Specialist Role" },
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
          The People Behind Life <br /> Biologics
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg md:text-2xl text-gray-800 max-w-3xl mx-auto"
        >
          The dedicated professionals pioneering breakthroughs in advanced <br /> wound care.
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
              className="p-[2px] rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
            >
              {/* Inner card with gradient border */}
              <div className="p-6 bg-white rounded-xl">
                {/* Circle Image with gradient border */}
                <div className="w-32 h-32 mx-auto rounded-full p-[3px] bg-gradient-to-r from-pink-500 to-purple-600">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Name with gradient text */}
                <h3 className="mt-4 text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  {member.name}
                </h3>

                {/* Profession with gradient border + light purple bg */}
                <p
                  className="mt-2 text-purple-700 px-4 py-2 rounded-lg text-sm font-medium inline-block"
                  style={{
                    backgroundColor: "#f3e8ff", // light purple
                    border: "2px solid transparent",
                    borderImage: "linear-gradient(to right, #ec4899, #8b5cf6) 1",
                  }}
                >
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

     <KeyBenefits/>

    </div>
  );
}
