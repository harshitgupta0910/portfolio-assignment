import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/motionVariants";

interface ExperienceItem {
  role: string;
  company: string;
  location?: string;
  duration: string;
  description: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
      role: "Full Stack Intern",
      company: "KreupAI Technologies LLC",
      location: "Dubai, UAE (Remote)",
      duration: "Sept 2024 - Present",
      description:
        "Developing and testing features for a product based solutions. Implementing CRUD operations and RESTful API integrations while collaborating with cross-functional teams using Git version control and agile methodologies.",
    },
    {
      role: "Campus Ambassador",
      company: "GeeksforGeeks",
      duration: "July 2024 - Present",
      description:
        "Promoted DSA and Web Development courses through workshops and outreach. Boosted peer engagement by organizing technical events.",
    },
    {
      role: "Campus Ambassador & Contributor",
      company: "GirlScript Summer of Code (GSSoC)",
      duration: "Sept 2024 - Nov 2024",
      description:
        "Contributed to open-source React projects focused on UI/UX improvements. Advocated for diversity in tech through collaborative initiatives.",
    },
    {
      role: "Contributor",
      company: "Hacktoberfest",
      duration: "Oct 2024 - Oct 2024",
      description:
        "Made meaningful contributions to various GitHub repositories. Encouraged open-source participation among peers through events.",
    },
  ];

  return (
    <main className="pt-16">
      <div className="min-h-screen py-0 px-4 bg-gradient-to-b from-gray-900 to-gray-800 relative">
        {/* Background Blur Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/2 -right-1/2 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"
            style={{ transform: "scale(1.00209)" }}
          />
          <div
            className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"
            style={{ transform: "scale(1.19791)" }}
          />
        </div>

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block px-6 py-0 text-rose-500 text-base font-medium mb-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            Work Experience
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-normal pb-2 bg-gradient-to-r from-blue-400 to-[#05cdff] transition-all duration-500 bg-clip-text text-transparent hover:scale-[1.01] transform"
          >
            My Professional Journey
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-[#4AC98F]"
          >
            Building impactful solutions and growing as a developer
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="relative"
            >
              <div className="bg-gray-800/80 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-[1.01] transition-all duration-300 border border-gray-700">
                <h2 className="text-xl font-bold text-white mb-2">
                  {exp.role} at <span className="text-yellow-400">{exp.company}</span>
                </h2>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mb-3">
                  <p className="text-sm text-[#05cdff]">
                    {exp.duration}
                  </p>
                  {exp.location && (
                    <>
                      <span className="hidden sm:inline text-gray-500">•</span>
                      <p className="text-sm text-gray-400 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {exp.location}
                      </p>
                    </>
                  )}
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <br /><br />
      </div>
    </main>
  );
};

export default Experience;
