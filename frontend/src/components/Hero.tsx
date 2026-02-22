import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion, Variants } from "framer-motion";
import me from "../assets/me2.png";
import computer from "../assets/computer.svg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero: React.FC = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeInUp}
      className="min-h-screen flex flex-col items-center justify-start px-6 py-12 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      {/* Floating animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          .animate-float {
            animation: float 3.5s ease-in-out infinite;
          }
          
          @keyframes pulse-glow {
            0%, 100% { 
               box-shadow: 0 0 20px rgba(59, 130, 246, 0.3),
                          0 0 40px rgba(59, 130, 246, 0.2);
            }
            50% { 
              box-shadow: 0 0 30px rgba(59, 130, 246, 0.5),
                          0 0 60px rgba(59, 130, 246, 0.3);
            }
          }
          
          .profile-container {
            position: relative;
            width: 240px;
            height: 240px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .profile-border-outer {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50%;
             padding: 4px;
            background: linear-gradient(135deg, #3b82f6, #06b6d4);
          }
          
          .profile-border-middle {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            padding: 2px;
            background: #1f2937;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          
          .profile-img-wrapper {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            overflow: hidden;
            
            animation: pulse-glow 3s ease-in-out infinite;
            position: relative;
          }
          
          .profile-img-wrapper::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 50%;
            background: linear-gradient(135deg, transparent, rgba(59, 130, 246, 0.1), transparent);
            opacity: 0;
            transition: opacity 0.5s ease;
          }
          
          .profile-container:hover .profile-img-wrapper::before {
            opacity: 1;
          }
        `}
      </style>

      {/* Profile Image */}
      <div className="mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2, 
            type: "spring", 
            stiffness: 120,
            damping: 10 
          }}
          className="profile-container"
          whileHover={{ scale: 1.1 }}
        >
          <div className="profile-border-outer">
            <div className="profile-border-middle">
              <div className="profile-img-wrapper">
                <motion.img
                  src={me}
                  alt="Harshit Gupta"
                  loading="lazy"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl">
        {/* Left Side */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <span className="inline-block text-primary-400 px-6 py-3 rounded-full font-medium text-2xl bg-rose-500 bg-clip-text text-transparent">
            Hi there, I'm
          </span>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-[#05cdff] bg-clip-text text-transparent transition-all duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Harshit Gupta
          </motion.h1>

          {/* Typewriter */}
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-100 font-medium h-12">
            <Typewriter
              words={[
                "MERN Stack Developer 👨‍💻",
                "Competitive Programmer 💻",
                "Music Enthusiast 🎧",
                "Problem Solver 📝",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </div>

          <p className="text-lg text-teal-200">
            I build exceptional digital experiences and solve complex problems through elegant code.
          </p>
          <p className="text-lg text-yellow-500">
            Passionate about creating impactful solutions that make a difference.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/about"
              className="group relative px-6 sm:px-8 py-3 rounded-lg bg-[#359fef] text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r group-hover:from-[#EC4899] group-hover:via-purple-400 group-hover:to-purple-200 translate-x-0 group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0"></span>
              <span className="relative z-10 flex items-center justify-center sm:justify-start gap-2">
                About Me
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>

            <a
              href="/contact"
              className="group relative px-6 py-3 rounded-lg border-2 border-primary-400 text-white font-medium hover:border-blue-500 transition-all duration-300"
            >
              <span className="relative flex items-center justify-center sm:justify-start gap-2">
                Get in Touch
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Right Side: Floating SVG */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
          <motion.img
            src={computer}
            alt="Laptop Illustration"
            className="w-[500px] h-[450px] animate-float drop-shadow-2xl hover:scale-125 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
