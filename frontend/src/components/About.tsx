import React from "react";
import JourneySvg from "../assets/journey-illustration.svg";
import l from "../assets/l.png";
import g from "../assets/g.png";
import f from "../assets/f.png";
import cc from "../assets/cc.png";
import cn from "../assets/cn.jpg";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/motionVariants";

interface Achievement {
  title: string;
  desc: React.ReactNode;
}

interface WhatIDo {
  title: string;
  desc: string;
}

interface CodingProfile {
  title: string;
  href: string;
  rating: string;
  problems: string;
  img: string;
}

const About: React.FC = () => {
  const achievements: Achievement[] = [
    {
      title: "LeetCode Knight Badge",
      desc: (
        <>
          Solved 700+ problems and earned{" "}
          <span className="text-[#05cdff]">Knight</span> status on LeetCode.
        </>
      ),
    },
    {
      title: "HackByte 3.0",
      desc: (
        <>
          Selected among top 120 teams for offline national-level{" "}
          <span className="text-[#05cdff]">Hackathon</span> hosted by{" "}
          <span className="text-[#05cdff]">IIIT Jabalpur</span>.
        </>
      ),
    },
    {
      title: "BuldWithDelhi 2.0",
      desc: (
        <>
          Selected among top 40 teams for offline {" "}
          <span className="text-[#05cdff]">Hackathon</span> conducted at{" "}
          <span className="text-[#05cdff]">Microsoft Gurugram</span>.
        </>
      ),
    },
    {
      title: "Naukri Campus Young Turks",
      desc: (
        <>
          Got{" "}
          <span className="text-[#05cdff]">99.80 </span>percentile in this contest among 2 lakh+ participants.
        </>
      ),
    },
  ];

  const whatIDo: WhatIDo[] = [
    { title: "Frontend Development", desc: "Create responsive and intuitive UIs using modern frameworks." },
    { title: "Backend Development", desc: "Build efficient backend systems with performance in mind." },
    { title: "Database Design", desc: "Experience with MongoDB for performance & scalability." },
  ];

  const codingProfiles: CodingProfile[] = [
    { title: "LeetCode", href: "https://leetcode.com/harshitgupta0910/", rating: "Rating-1878 [Knight]", problems: "600+ Problems", img: l },
    { title: "GeeksForGeeks", href: "https://www.geeksforgeeks.org/user/harshitgupta0123/", rating: "Rating-1820 [4✯]", problems: "500+ Problems", img: g },
    { title: "CodeChef", href: "https://www.codechef.com/users/harshitgupta99", rating: "Rating-1618 [3✯]", problems: "100+ Problems", img: cc },
    { title: "Codeforces", href: "https://codeforces.com/profile/harshitgupta0910", rating: "Rating-1249 [Pupil]", problems: "100+ Problems", img: f },
    { title: "Coding Ninjas", href: "https://www.naukri.com/code360/profile/harshitgupta09", rating: "Rating-2301 [Specialist]", problems: "800+ Problems", img: cn },
  ];

  return (
    <main className="pt-16">
      <div className="min-h-screen px-4 bg-gradient-to-b from-gray-900 to-gray-800 relative text-white">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 -right-1/2 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
        </div>

        {/* Header Section */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="relative text-center mb-16">
          <motion.span variants={fadeInUp} className="inline-block px-6 py-0 text-rose-500 text-base font-medium mb-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            About Me
          </motion.span>
          <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-normal pb-2 bg-gradient-to-r from-blue-400 to-[#05cdff] bg-clip-text text-transparent">
            Harshit Gupta
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-lg text-[#4AC98F]">
            MERN Stack Developer
          </motion.p>
        </motion.div>

        {/* Two-Column Grid */}
        <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div variants={fadeInUp} className="bg-gray-800/80 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-gray-700 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-[#08CBD2] mb-6 flex items-center gap-3">
                📘 Education
              </h2>
              <div className="relative pl-8 border-l-2 border-purple-500/30">
                <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500" />
                <h3 className="font-semibold text-lg">B.Tech in Computer Science (2022-26)</h3>
                <p className="text-sm text-[#05cdff] mb-2">Kamla Nehru Institute of Technology, Sultanpur</p>
                <p className="text-gray-300">CGPA: 8.26/10</p>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={fadeInUp} className="bg-gray-800/80 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-gray-700 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-[#08CBD2] mb-6 flex items-center gap-3">🏆 Achievements</h2>
              <div className="space-y-4">
                {achievements.map((ach, i) => (
                  <div key={i} className="p-4 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition-all duration-300">
                    <h3 className="font-semibold">{ach.title}</h3>
                    <p className="text-sm text-gray-300">{ach.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp} className="flex justify-center items-center">
              <img src={JourneySvg} alt="Journey Illustration" className="w-full max-w-md h-auto object-contain" />
            </motion.div>

            <motion.div variants={fadeInUp} className="w-full bg-gray-800/80 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-[#08CBD2] mb-4 flex items-center gap-3">🚀 What I Do</h2>
              <div className="space-y-4">
                {whatIDo.map((item, i) => (
                  <div key={i} className="p-4 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 transition">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Coding Profiles */}
        <motion.div variants={fadeInUp} className="col-span-full max-w-7xl mx-auto mb-8">
          <div className="bg-gray-800/80 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-gray-700">
            <h2 className="text-2xl font-bold text-[#08CBD2] mb-6 flex items-center gap-3">💻 Coding Profiles</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {codingProfiles.map((profile, i) => (
                <motion.a
                  variants={fadeInUp}
                  key={i}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 rounded-lg bg-gray-700/50 flex flex-col items-center gap-3 group transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
                >
                  <div className="p-3 rounded-full bg-gray-600 group-hover:bg-blue-200 transition-colors">
                    <img src={profile.img} alt={`${profile.title} Logo`} className="w-8 h-8 object-contain" />
                  </div>
                  <h3 className="font-semibold group-hover:text-blue-400 transition">{profile.title}</h3>
                  <p className="text-sm text-yellow-400">{profile.rating}</p>
                  <span className="px-3 py-1 text-sm rounded-full text-[#05cdff]">{profile.problems}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* GitHub Contributions */}
        <motion.div variants={fadeInUp} className="col-span-full max-w-5xl mx-auto pb-16">
          <div className="bg-gray-800/80 backdrop-blur-lg rounded-xl p-8 shadow-lg border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-[#08CBD2] flex items-center gap-2">📊 GitHub Contributions</h1>
              <a href="https://github.com/harshitgupta0910" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-100 hover:underline flex items-center gap-1">
                harshitgupta0910
              </a>
            </div>
            <div className="overflow-auto rounded-lg text-white">
              <GitHubCalendar
                username="harshitgupta0910"
                blockSize={14}
                blockMargin={4}
                fontSize={12}
                colorScheme="dark"
                theme={{
                  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                }}
                labels={{
                  totalCount: "{{count}} contributions in the last year",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default About;
