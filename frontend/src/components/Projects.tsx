import React from "react";
import { motion, Variants } from "framer-motion";

import chatbot from "../assets/anil.png";
import chatkaro from "../assets/chatkaro.png";
import hub from "../assets/money.png";
import codathon from "../assets/codathon.png";
import decollab from "../assets/devcollab.png";
import skill from "../assets/skillbridge.png";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects: React.FC = () => {
  return (
    <main className="pt-16">

      <div className="min-h-screen py-0 px-4 bg-gradient-to-b   from-gray-900  to-gray-800 relative">

        {/* Background Blur Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/2 -right-1/2 w-96 h-96 bg-pink-600/5 rounded-full blur-3xl"
            style={{ transform: "scale(1.00209)" }}
          ></div>
          <div
            className="absolute -bottom-1/2 -left-1/2 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"
            style={{ transform: "scale(1.19791)" }}
          ></div>
        </div>

        {/* Section Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative text-center mb-16"
        >
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-0   text-rose-500 text-base font-medium mb-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            Work Projects
          </motion.span>
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.3 }}
            className="group"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-normal pb-2 bg-gradient-to-r from-blue-400  to-[#05cdff] transition-all duration-500 bg-clip-text text-transparent hover:scale-[1.01] transform">
              Featured Projects
            </h1>
          </motion.div>
          <p className="text-lg   text-[#4AC98F]">
            Showcasing my technical expertise and creativity
          </p>
        </motion.div>

         <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Project Card */}

          <div className="  bg-gray-800/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border   border-gray-700">
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden group">
              <img
                src={codathon}
                alt="Codathon Project"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4">
                <span className="px-4 py-2   bg-gray-300/90 rounded-full text-sm font-medium  text-primary-400 backdrop-blur-sm">
                  Featured Project
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold   text-[#08CBD2] mb-4">
                Codathon
              </h3>
              <p className="  text-gray-300 mb-6">
                Create a sleek web app that tracks upcoming competitive programming contests and hackathons across platforms like Codeforces, LeetCode, CodeChef, Unstop etc. It features a smart calendar view, platform-specific pages, live countdowns, and integrated hackathon listings—all in one place.
              </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold   text-white mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {/* React */}
                  <div className="px-4 py-2   bg-gray-700/50 rounded-lg   text-gray-300 font-medium border   border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      {/* React icon */}
                      <svg viewBox="0 0 128 128"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6">
                        <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                      </svg>
                    </span>
                    <span>React.js</span>
                  </div>

                  {/* Node.js */}
                  <div className="px-4 py-2   bg-gray-700/50 rounded-lg   text-gray-300 font-medium border   border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="1em" width="1em">
                        <rect width="256" height="256" fill="#3178C6" rx="16" />
                        <path fill="#fff" d="M112.5 116.4h-17.8v53.7h-16.5v-53.7H60.6v-13.5h51.9v13.5Zm68.2 32.7c-1.2-2.1-2.5-3.5-4-4.3-1.4-.7-3.6-1.1-6.6-1.1-3 0-5.3.4-7 .9-1.7.6-3.2 1.3-4.5 2.3l-.8.6-6.7-10.1 1.1-.9c2.7-2.2 5.7-3.8 9-4.8 3.2-1 7.1-1.5 11.6-1.5 5.6 0 10 .7 13.3 2.2 3.3 1.5 6.2 3.9 8.6 7.3 2.4 3.4 3.6 7.8 3.6 13.2v28.2h-16.5v-5.9c-1.9 2-3.8 3.5-5.9 4.4-2 .9-4.6 1.4-7.8 1.4-3.2 0-6-.5-8.4-1.4-2.5-.9-4.4-2.3-6-4.1-1.5-1.8-2.7-4-3.4-6.5-.8-2.5-1.1-5.3-1.1-8.4 0-3.3.4-6.1 1.1-8.6.7-2.5 1.8-4.6 3.3-6.4 1.4-1.8 3.3-3.2 5.6-4.1 2.2-.9 4.9-1.3 8.1-1.3 3.3 0 6 .5 8.1 1.4 2.1.9 4 2.6 5.7 5.1l.5.7-6.3 9.3Zm-13.7 13.5c1.8 0 3.3-.2 4.5-.7 1.2-.5 2.2-1.2 3-2.1.8-.9 1.4-2 1.7-3.3.3-1.3.5-2.7.5-4.2 0-1.4-.2-2.8-.5-4.1-.3-1.3-.9-2.4-1.7-3.3-.8-.9-1.8-1.6-3-2.1-1.2-.5-2.7-.7-4.5-.7-1.7 0-3.2.2-4.4.7-1.2.5-2.2 1.2-3 2.1-.8.9-1.4 2-1.7 3.3-.4 1.3-.5 2.7-.5 4.1 0 1.5.2 2.9.5 4.2.3 1.3.9 2.4 1.7 3.3.8.9 1.8 1.6 3 2.1 1.2.5 2.7.7 4.4.7Z" />
                      </svg>
                    </span>
                    <span>TypeScript</span>
                  </div>


                  {/* Socket.IO */}
                  <div className="px-4 py-2   bg-gray-700/50 rounded-lg   text-gray-300 font-medium border   border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" className="text-[#010101]">
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.06A1.65 1.65 0 0 0 9 4.6V4a2 2 0 1 1 4 0v.09c0 .66.38 1.25 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.06c.26.62.85 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.66 0-1.25.38-1.51 1Z" />
                      </svg>
                    </span>
                    <span>Clist API</span>
                  </div>


                  {/* CodeMirror */}
                  <div className="px-4 py-2   bg-gray-700/50 rounded-lg   text-gray-300 font-medium border border-gray-100  border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" height="1em" width="1em">
                        <path fill="#38BDF8" d="M24 14.5c-4.2 0-6.8 2.1-7.9 6.2 1.6-2.1 3.3-2.9 5.1-2.4 1.1.3 1.8 1.1 2.6 2 1.3 1.5 2.8 3.1 6.2 3.1 4.2 0 6.8-2.1 7.9-6.2-1.6 2.1-3.3 2.9-5.1 2.4-1.1-.3-1.8-1.1-2.6-2-1.3-1.5-2.8-3.1-6.2-3.1Zm-12 9C7.8 23.5 5.2 25.6 4.1 29.7c1.6-2.1 3.3-2.9 5.1-2.4 1.1.3 1.8 1.1 2.6 2 1.3 1.5 2.8 3.1 6.2 3.1 4.2 0 6.8-2.1 7.9-6.2-1.6 2.1-3.3 2.9-5.1 2.4-1.1-.3-1.8-1.1-2.6-2-1.3-1.5-2.8-3.1-6.2-3.1Z" />
                      </svg>
                    </span>
                    <span>Tailwind</span>
                  </div>


                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-8">
                <a
                  href="https://github.com/harshitgupta0910/Codathon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3   bg-gray-700/50   text-white rounded-lg   hover:bg-gray-600/50 transition-colors duration-300 font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008.12 10.98c.6.11.82-.26.82-.58v-2.06c-3.3.72-4-1.6-4-1.6a3.14 3.14 0 00-1.3-1.7c-1.07-.74.08-.73.08-.73a2.5 2.5 0 011.83 1.23 2.54 2.54 0 003.47 1 2.53 2.53 0 01.76-1.6c-2.64-.3-5.42-1.32-5.42-5.88a4.6 4.6 0 011.22-3.17 4.27 4.27 0 01.12-3.13s1-.33 3.3 1.23a11.37 11.37 0 016 0c2.3-1.56 3.3-1.23 3.3-1.23a4.27 4.27 0 01.12 3.13 4.6 4.6 0 011.22 3.17c0 4.57-2.78 5.58-5.43 5.87a2.84 2.84 0 01.81 2.2v3.27c0 .32.22.7.83.58A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>View Code</span>
                </a>

                <a
                  href="https://codathon-kappa.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#34b1ff] text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                >
                  {/* Animated gradient overlay */}
                  <span className="absolute inset-0 bg-gradient-to-r group-hover:from-[#a855f7] group-hover:via-indigo-500 group-hover:to-blue-400 translate-x-0 group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0"></span>

                  {/* Text & icon */}
                  <span className="relative z-10 flex items-center justify-center gap-2 w-full">
                    🚀 Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </a>

              </div>
            </div>

          </div>

          <div className="  bg-gray-800/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border   border-gray-700">
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden group">
              <img
                src={decollab}
                alt="Codathon Project"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4">
                <span className="px-4 py-2   bg-gray-300/90 rounded-full text-sm font-medium  text-primary-400 backdrop-blur-sm">
                  Featured Project
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold   text-[#08CBD2] mb-4">
                DevCollab
              </h3>
              <p className="  text-gray-300 mb-6">
                DevCollab is a secure, real-time collaborative coding platform that enables developers to write and edit code simultaneously in private rooms. It features live code synchronization, seamless multi-user editing, and session-specific room sharing for pair programming, interviews, and team collaboration.
                 </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold   text-white mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {/* React */}
                  <div className="px-4 py-2   bg-gray-700/50 rounded-lg   text-gray-300 font-medium border   border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      {/* React icon */}
                      <svg viewBox="0 0 128 128"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6">
                        <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                      </svg>
                    </span>
                    <span>React.js</span>
                  </div>

                 {/* Node.js */}
<div className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 font-medium border border-gray-600 flex items-center gap-2">
  <span className="text-xl">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 272" height="1em" width="1em">
      <path fill="#539E43" d="M128 .003 10.692 68.504v135.003L128 272l117.308-68.493V68.504z"/>
      <path fill="#FFF" d="m182.238 181.799-13.005 7.473c-2.498 1.418-5.137 2.183-7.839 2.183-5.33 0-8.375-2.721-8.375-7.411v-47.744h-16.69v48.289c0 13.889 8.132 21.729 21.788 21.729 4.057 0 7.694-.727 11.325-2.269l12.796-7.242zm-49.492-67.181c-6.718 0-11.82 1.495-15.999 3.327-1.063.452-1.252.82-1.252 1.854v13.224c0 1.136.547 1.421 1.556 1.042 4.267-1.782 9.445-2.924 14.267-2.924 6.718 0 9.711 2.02 9.711 6.056 0 2.451-.977 4.096-3.115 5.006-2.225.977-5.696 1.989-9.69 3.267-10.267 3.3-15.72 8.321-15.72 18.787 0 10.825 8.261 17.593 21.234 17.593 5.62 0 10.313-.783 13.862-2.012 1.252-.463 1.334-1.215 1.334-2.225v-12.535c0-1.23-.63-1.61-1.672-1.136-3.568 1.499-8.183 2.25-12.319 2.25-5.38 0-8.222-1.733-8.222-5.015 0-2.498 1.06-4.096 3.391-5.183 2.206-1.06 6.083-2.1 9.191-3.124 8.969-3.044 13.693-8.14 13.693-18.293 0-10.873-8.252-17.733-20.861-17.733z"/>
    </svg>
  </span>
  <span>Node.js</span>
</div>



                 {/* JWT Auth */}
<div className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 font-medium border border-gray-600 flex items-center gap-2">
  <span className="text-xl">
    {/* Shield/Lock Icon */}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#010101]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c1.657 0 3-1.343 3-3V7.5a3 3 0 10-6 0V9c0 1.657 1.343 3 3 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 10v4.5a6 6 0 01-12 0V10" />
    </svg>
  </span>
  <span>JWT </span>
</div>



                  {/* CodeMirror */}
                  <div className="px-4 py-2   bg-gray-700/50 rounded-lg   text-gray-300 font-medium border border-gray-100  border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" height="1em" width="1em">
                        <path fill="#38BDF8" d="M24 14.5c-4.2 0-6.8 2.1-7.9 6.2 1.6-2.1 3.3-2.9 5.1-2.4 1.1.3 1.8 1.1 2.6 2 1.3 1.5 2.8 3.1 6.2 3.1 4.2 0 6.8-2.1 7.9-6.2-1.6 2.1-3.3 2.9-5.1 2.4-1.1-.3-1.8-1.1-2.6-2-1.3-1.5-2.8-3.1-6.2-3.1Zm-12 9C7.8 23.5 5.2 25.6 4.1 29.7c1.6-2.1 3.3-2.9 5.1-2.4 1.1.3 1.8 1.1 2.6 2 1.3 1.5 2.8 3.1 6.2 3.1 4.2 0 6.8-2.1 7.9-6.2-1.6 2.1-3.3 2.9-5.1 2.4-1.1-.3-1.8-1.1-2.6-2-1.3-1.5-2.8-3.1-6.2-3.1Z" />
                      </svg>
                    </span>
                    <span>Tailwind</span>
                  </div>


                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-8">
                <a
                  href="https://github.com/harshitgupta0910/dev.collab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3   bg-gray-700/50   text-white rounded-lg   hover:bg-gray-600/50 transition-colors duration-300 font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008.12 10.98c.6.11.82-.26.82-.58v-2.06c-3.3.72-4-1.6-4-1.6a3.14 3.14 0 00-1.3-1.7c-1.07-.74.08-.73.08-.73a2.5 2.5 0 011.83 1.23 2.54 2.54 0 003.47 1 2.53 2.53 0 01.76-1.6c-2.64-.3-5.42-1.32-5.42-5.88a4.6 4.6 0 011.22-3.17 4.27 4.27 0 01.12-3.13s1-.33 3.3 1.23a11.37 11.37 0 016 0c2.3-1.56 3.3-1.23 3.3-1.23a4.27 4.27 0 01.12 3.13 4.6 4.6 0 011.22 3.17c0 4.57-2.78 5.58-5.43 5.87a2.84 2.84 0 01.81 2.2v3.27c0 .32.22.7.83.58A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>View Code</span>
                </a>

                <a
                  href="https://dev-collab-three.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#34b1ff] text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                >
                  {/* Animated gradient overlay */}
                  <span className="absolute inset-0 bg-gradient-to-r group-hover:from-[#a855f7] group-hover:via-indigo-500 group-hover:to-blue-400 translate-x-0 group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0"></span>

                  {/* Text & icon */}
                  <span className="relative z-10 flex items-center justify-center gap-2 w-full">
                    🚀 Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </a>

              </div>
            </div>

          </div>

           <div className="  bg-gray-800/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border   border-gray-700">
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden group">
              <img
                src={skill}
                alt="Codathon Project"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4">
                <span className="px-4 py-2   bg-gray-300/90 rounded-full text-sm font-medium  text-primary-400 backdrop-blur-sm">
                  Featured Project
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold   text-[#08CBD2] mb-4">
                Skill Bridge
              </h3>
              <p className="  text-gray-300 mb-6">
               Built a real-time, AI-driven web platform that intelligently matches users based on skills, availability, and languages for effective peer-to-peer learning and collaboration. Boosted successful connections by 50% by implementing smart matchmaking and real-time Socket.IO-based chat with JWT-authenticated sessions. </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold   text-white mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {/* React */}
                  <div className="px-4 py-2   bg-gray-700/50 rounded-lg   text-gray-300 font-medium border   border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      {/* React icon */}
                      <svg viewBox="0 0 128 128"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6">
                        <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                      </svg>
                    </span>
                    <span>React.js</span>
                  </div>

                 {/* Node.js */}
<div className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 font-medium border border-gray-600 flex items-center gap-2">
  <span className="text-xl">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 272" height="1em" width="1em">
      <path fill="#539E43" d="M128 .003 10.692 68.504v135.003L128 272l117.308-68.493V68.504z"/>
      <path fill="#FFF" d="m182.238 181.799-13.005 7.473c-2.498 1.418-5.137 2.183-7.839 2.183-5.33 0-8.375-2.721-8.375-7.411v-47.744h-16.69v48.289c0 13.889 8.132 21.729 21.788 21.729 4.057 0 7.694-.727 11.325-2.269l12.796-7.242zm-49.492-67.181c-6.718 0-11.82 1.495-15.999 3.327-1.063.452-1.252.82-1.252 1.854v13.224c0 1.136.547 1.421 1.556 1.042 4.267-1.782 9.445-2.924 14.267-2.924 6.718 0 9.711 2.02 9.711 6.056 0 2.451-.977 4.096-3.115 5.006-2.225.977-5.696 1.989-9.69 3.267-10.267 3.3-15.72 8.321-15.72 18.787 0 10.825 8.261 17.593 21.234 17.593 5.62 0 10.313-.783 13.862-2.012 1.252-.463 1.334-1.215 1.334-2.225v-12.535c0-1.23-.63-1.61-1.672-1.136-3.568 1.499-8.183 2.25-12.319 2.25-5.38 0-8.222-1.733-8.222-5.015 0-2.498 1.06-4.096 3.391-5.183 2.206-1.06 6.083-2.1 9.191-3.124 8.969-3.044 13.693-8.14 13.693-18.293 0-10.873-8.252-17.733-20.861-17.733z"/>
    </svg>
  </span>
  <span>Node.js</span>
</div>



                 {/* JWT Auth */}
<div className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 font-medium border border-gray-600 flex items-center gap-2">
  <span className="text-xl">
    {/* Shield/Lock Icon */}
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#010101]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12c1.657 0 3-1.343 3-3V7.5a3 3 0 10-6 0V9c0 1.657 1.343 3 3 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 10v4.5a6 6 0 01-12 0V10" />
    </svg>
  </span>
  <span>JWT </span>
</div>



                  {/* CodeMirror */}
                  <div className="px-4 py-2   bg-gray-700/50 rounded-lg   text-gray-300 font-medium border border-gray-100  border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" height="1em" width="1em">
                        <path fill="#38BDF8" d="M24 14.5c-4.2 0-6.8 2.1-7.9 6.2 1.6-2.1 3.3-2.9 5.1-2.4 1.1.3 1.8 1.1 2.6 2 1.3 1.5 2.8 3.1 6.2 3.1 4.2 0 6.8-2.1 7.9-6.2-1.6 2.1-3.3 2.9-5.1 2.4-1.1-.3-1.8-1.1-2.6-2-1.3-1.5-2.8-3.1-6.2-3.1Zm-12 9C7.8 23.5 5.2 25.6 4.1 29.7c1.6-2.1 3.3-2.9 5.1-2.4 1.1.3 1.8 1.1 2.6 2 1.3 1.5 2.8 3.1 6.2 3.1 4.2 0 6.8-2.1 7.9-6.2-1.6 2.1-3.3 2.9-5.1 2.4-1.1-.3-1.8-1.1-2.6-2-1.3-1.5-2.8-3.1-6.2-3.1Z" />
                      </svg>
                    </span>
                    <span>Tailwind</span>
                  </div>


                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-8">
                <a
                  href="https://github.com/harshitgupta0910/skill_bridge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3   bg-gray-700/50   text-white rounded-lg   hover:bg-gray-600/50 transition-colors duration-300 font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008.12 10.98c.6.11.82-.26.82-.58v-2.06c-3.3.72-4-1.6-4-1.6a3.14 3.14 0 00-1.3-1.7c-1.07-.74.08-.73.08-.73a2.5 2.5 0 011.83 1.23 2.54 2.54 0 003.47 1 2.53 2.53 0 01.76-1.6c-2.64-.3-5.42-1.32-5.42-5.88a4.6 4.6 0 011.22-3.17 4.27 4.27 0 01.12-3.13s1-.33 3.3 1.23a11.37 11.37 0 016 0c2.3-1.56 3.3-1.23 3.3-1.23a4.27 4.27 0 01.12 3.13 4.6 4.6 0 011.22 3.17c0 4.57-2.78 5.58-5.43 5.87a2.84 2.84 0 01.81 2.2v3.27c0 .32.22.7.83.58A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>View Code</span>
                </a>

                <a
                  href="https://skill-bridge-2-frontend.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#34b1ff] text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                >
                  {/* Animated gradient overlay */}
                  <span className="absolute inset-0 bg-gradient-to-r group-hover:from-[#a855f7] group-hover:via-indigo-500 group-hover:to-blue-400 translate-x-0 group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0"></span>

                  {/* Text & icon */}
                  <span className="relative z-10 flex items-center justify-center gap-2 w-full">
                    🚀 Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </a>

              </div>
            </div>

          </div>

          <div className="  bg-gray-800/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border   border-gray-700">
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden group">
              <img
                src={chatbot}
                alt="Anil Atta Chakki Project"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4">
                <span className="px-4 py-2   bg-gray-300/90 rounded-full text-sm font-medium   text-primary-400 backdrop-blur-sm">
                  Featured Project
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold   text-[#08CBD2] mb-4">
                Anil Atta Chakki
              </h3>
              <p className="  text-gray-300 mb-6">
                A professional business website built for Anil Atta Chakki, a local flour mill business. The site features a modern landing page with product listings, business information, and a contact section — crafted to give the brand a strong online presence with a clean, responsive design.
              </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold   text-white mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {/* React */}
                  <div className="px-4 py-2   bg-gray-700/50 rounded-lg   text-gray-300 font-medium border border-gray-100  border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      {/* React icon */}
                      <svg viewBox="0 0 128 128"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6">
                        <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                      </svg>
                    </span>
                    <span>React.js</span>
                  </div>

                  {/* Node.js */}
                  <div className="px-4 py-2   bg-gray-700/50 rounded-lg   text-gray-300 font-medium border   border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="1em" width="1em">
                        <rect width="256" height="256" fill="#3178C6" rx="16" />
                        <path fill="#fff" d="M112.5 116.4h-17.8v53.7h-16.5v-53.7H60.6v-13.5h51.9v13.5Zm68.2 32.7c-1.2-2.1-2.5-3.5-4-4.3-1.4-.7-3.6-1.1-6.6-1.1-3 0-5.3.4-7 .9-1.7.6-3.2 1.3-4.5 2.3l-.8.6-6.7-10.1 1.1-.9c2.7-2.2 5.7-3.8 9-4.8 3.2-1 7.1-1.5 11.6-1.5 5.6 0 10 .7 13.3 2.2 3.3 1.5 6.2 3.9 8.6 7.3 2.4 3.4 3.6 7.8 3.6 13.2v28.2h-16.5v-5.9c-1.9 2-3.8 3.5-5.9 4.4-2 .9-4.6 1.4-7.8 1.4-3.2 0-6-.5-8.4-1.4-2.5-.9-4.4-2.3-6-4.1-1.5-1.8-2.7-4-3.4-6.5-.8-2.5-1.1-5.3-1.1-8.4 0-3.3.4-6.1 1.1-8.6.7-2.5 1.8-4.6 3.3-6.4 1.4-1.8 3.3-3.2 5.6-4.1 2.2-.9 4.9-1.3 8.1-1.3 3.3 0 6 .5 8.1 1.4 2.1.9 4 2.6 5.7 5.1l.5.7-6.3 9.3Zm-13.7 13.5c1.8 0 3.3-.2 4.5-.7 1.2-.5 2.2-1.2 3-2.1.8-.9 1.4-2 1.7-3.3.3-1.3.5-2.7.5-4.2 0-1.4-.2-2.8-.5-4.1-.3-1.3-.9-2.4-1.7-3.3-.8-.9-1.8-1.6-3-2.1-1.2-.5-2.7-.7-4.5-.7-1.7 0-3.2.2-4.4.7-1.2.5-2.2 1.2-3 2.1-.8.9-1.4 2-1.7 3.3-.4 1.3-.5 2.7-.5 4.1 0 1.5.2 2.9.5 4.2.3 1.3.9 2.4 1.7 3.3.8.9 1.8 1.6 3 2.1 1.2.5 2.7.7 4.4.7Z" />
                      </svg>
                    </span>
                    <span>Typescript</span>
                  </div>

                  {/* Node.js */}
                  <div className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 font-medium border border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 272" height="1em" width="1em">
                        <path fill="#539E43" d="M128 .003 10.692 68.504v135.003L128 272l117.308-68.493V68.504z"/>
                        <path fill="#FFF" d="m182.238 181.799-13.005 7.473c-2.498 1.418-5.137 2.183-7.839 2.183-5.33 0-8.375-2.721-8.375-7.411v-47.744h-16.69v48.289c0 13.889 8.132 21.729 21.788 21.729 4.057 0 7.694-.727 11.325-2.269l12.796-7.242zm-49.492-67.181c-6.718 0-11.82 1.495-15.999 3.327-1.063.452-1.252.82-1.252 1.854v13.224c0 1.136.547 1.421 1.556 1.042 4.267-1.782 9.445-2.924 14.267-2.924 6.718 0 9.711 2.02 9.711 6.056 0 2.451-.977 4.096-3.115 5.006-2.225.977-5.696 1.989-9.69 3.267-10.267 3.3-15.72 8.321-15.72 18.787 0 10.825 8.261 17.593 21.234 17.593 5.62 0 10.313-.783 13.862-2.012 1.252-.463 1.334-1.215 1.334-2.225v-12.535c0-1.23-.63-1.61-1.672-1.136-3.568 1.499-8.183 2.25-12.319 2.25-5.38 0-8.222-1.733-8.222-5.015 0-2.498 1.06-4.096 3.391-5.183 2.206-1.06 6.083-2.1 9.191-3.124 8.969-3.044 13.693-8.14 13.693-18.293 0-10.873-8.252-17.733-20.861-17.733z"/>
                      </svg>
                    </span>
                    <span>Node.js</span>
                  </div>

                  {/* Tailwind */}
                  <div className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 font-medium border border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" height="1em" width="1em">
                        <path fill="#38BDF8" d="M24 14.5c-4.2 0-6.8 2.1-7.9 6.2 1.6-2.1 3.3-2.9 5.1-2.4 1.1.3 1.8 1.1 2.6 2 1.3 1.5 2.8 3.1 6.2 3.1 4.2 0 6.8-2.1 7.9-6.2-1.6 2.1-3.3 2.9-5.1 2.4-1.1-.3-1.8-1.1-2.6-2-1.3-1.5-2.8-3.1-6.2-3.1Zm-12 9C7.8 23.5 5.2 25.6 4.1 29.7c1.6-2.1 3.3-2.9 5.1-2.4 1.1.3 1.8 1.1 2.6 2 1.3 1.5 2.8 3.1 6.2 3.1 4.2 0 6.8-2.1 7.9-6.2-1.6 2.1-3.3 2.9-5.1 2.4-1.1-.3-1.8-1.1-2.6-2-1.3-1.5-2.8-3.1-6.2-3.1Z" />
                      </svg>
                    </span>
                    <span>Tailwind</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-8">
                <a
                  href="https://github.com/harshitgupta0910/anil_atta_chakki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-700/50 text-white rounded-lg hover:bg-gray-600/50 transition-colors duration-300 font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008.12 10.98c.6.11.82-.26.82-.58v-2.06c-3.3.72-4-1.6-4-1.6a3.14 3.14 0 00-1.3-1.7c-1.07-.74.08-.73.08-.73a2.5 2.5 0 011.83 1.23 2.54 2.54 0 003.47 1 2.53 2.53 0 01.76-1.6c-2.64-.3-5.42-1.32-5.42-5.88a4.6 4.6 0 011.22-3.17 4.27 4.27 0 01.12-3.13s1-.33 3.3 1.23a11.37 11.37 0 016 0c2.3-1.56 3.3-1.23 3.3-1.23a4.27 4.27 0 01.12 3.13 4.6 4.6 0 011.22 3.17c0 4.57-2.78 5.58-5.43 5.87a2.84 2.84 0 01.81 2.2v3.27c0 .32.22.7.83.58A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" clipRule="evenodd" />
                  </svg>
                  <span>View Code</span>
                </a>
                <a
                  href="https://anil-atta-chakki.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#34b1ff] text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r group-hover:from-[#a855f7] group-hover:via-indigo-500 group-hover:to-blue-400 translate-x-0 group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0"></span>
                  <span className="relative z-10 flex items-center justify-center gap-2 w-full">
                    🚀 Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

          </div>


          <div className="  bg-gray-800/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border   border-gray-700">
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden group">
              <img
                src={chatkaro}
                alt="ChatBot Pro Project"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4">
                <span className="px-4 py-2 bg-white/90  bg-gray-300/90 rounded-full text-sm font-medium text-primary-600  text-primary-400 backdrop-blur-sm">
                  Featured Project
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold  text-[#08CBD2] mb-4">
                ChatKaro
              </h3>
              <p className=" text-gray-300 mb-6">
                ChatKaro is an intuitive web application built with ReactJS, JavaScript, Tailwind CSS, and API integration that simplifies WhatsApp communication by allowing users to start chats without saving contact numbers. It also includes QR code generation for quick access, enhancing convenience and user experience.
              </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold   text-white mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {/* React */}
                  <div className="px-4 py-2   bg-gray-700/50 rounded-lg   text-gray-300 font-medium border   border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      {/* React icon */}
                      <svg viewBox="0 0 128 128"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6">
                        <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                      </svg>
                    </span>
                    <span>React.js</span>
                  </div>

                  {/* Node.js */}
                  <div className="px-4 py-2  bg-gray-700/50 rounded-lg   text-gray-300 font-medium border   border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      <svg viewBox="0 0 128 128"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6">
                        <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"></path><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"></path>
                      </svg>
                    </span>
                    <span>Javascript</span>
                  </div>

                  {/* Socket.IO */}
                  <div className="px-4 py-2   bg-gray-700/50 rounded-lg   text-gray-300 font-medium border  border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        className="text-[#010101]"
                      >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.06A1.65 1.65 0 0 0 9 4.6V4a2 2 0 1 1 4 0v.09c0 .66.38 1.25 1 1.51a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.06c.26.62.85 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.66 0-1.25.38-1.51 1Z" />
                      </svg>

                    </span>
                    <span> API</span>
                  </div>

                  {/* CodeMirror */}
                  <div className="px-4 py-2   bg-gray-700/50 rounded-lg  text-gray-300 font-medium border   border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" height="1em" width="1em">
                        <path fill="#38BDF8" d="M24 14.5c-4.2 0-6.8 2.1-7.9 6.2 1.6-2.1 3.3-2.9 5.1-2.4 1.1.3 1.8 1.1 2.6 2 1.3 1.5 2.8 3.1 6.2 3.1 4.2 0 6.8-2.1 7.9-6.2-1.6 2.1-3.3 2.9-5.1 2.4-1.1-.3-1.8-1.1-2.6-2-1.3-1.5-2.8-3.1-6.2-3.1Zm-12 9C7.8 23.5 5.2 25.6 4.1 29.7c1.6-2.1 3.3-2.9 5.1-2.4 1.1.3 1.8 1.1 2.6 2 1.3 1.5 2.8 3.1 6.2 3.1 4.2 0 6.8-2.1 7.9-6.2-1.6 2.1-3.3 2.9-5.1 2.4-1.1-.3-1.8-1.1-2.6-2-1.3-1.5-2.8-3.1-6.2-3.1Z" />
                      </svg>
                    </span>
                    <span>Tailwind</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-8">
                <a
                  href="https://github.com/harshitgupta0910/Chat-Karo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3   bg-gray-700/50   text-white rounded-lg   hover:bg-gray-600/50 transition-colors duration-300 font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008.12 10.98c.6.11.82-.26.82-.58v-2.06c-3.3.72-4-1.6-4-1.6a3.14 3.14 0 00-1.3-1.7c-1.07-.74.08-.73.08-.73a2.5 2.5 0 011.83 1.23 2.54 2.54 0 003.47 1 2.53 2.53 0 01.76-1.6c-2.64-.3-5.42-1.32-5.42-5.88a4.6 4.6 0 011.22-3.17 4.27 4.27 0 01.12-3.13s1-.33 3.3 1.23a11.37 11.37 0 016 0c2.3-1.56 3.3-1.23 3.3-1.23a4.27 4.27 0 01.12 3.13 4.6 4.6 0 011.22 3.17c0 4.57-2.78 5.58-5.43 5.87a2.84 2.84 0 01.81 2.2v3.27c0 .32.22.7.83.58A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>View Code</span>
                </a>

                <a
                  href="https://chat-karo-five.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#34b1ff] text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                >
                  {/* Animated gradient overlay */}
                  <span className="absolute inset-0 bg-gradient-to-r group-hover:from-[#a855f7] group-hover:via-indigo-500 group-hover:to-blue-400 translate-x-0 group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0"></span>

                  {/* Text & icon */}
                  <span className="relative z-10 flex items-center justify-center gap-2 w-full">
                    🚀 Live Demo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </a>

              </div>
            </div>

          </div>


          <div className="  bg-gray-800/80 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border   border-gray-700">
            {/* Image */}
            <div className="relative h-64 w-full overflow-hidden group">
              <img
                src={hub}
                alt="MoneyFlow Project"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-4 right-4">
                <span className="px-4 py-2   bg-gray-300/90 rounded-full text-sm font-medium   text-primary-400 backdrop-blur-sm">
                  Hackathon Project
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold   text-[#08CBD2] mb-4">
                MoneyFlow
              </h3>
              <p className="   text-gray-300 mb-6">
                Money Manager is a full-stack personal finance &amp; expense tracker built during a 72-hour hackathon. It provides a comprehensive dashboard for tracking income and expenses, visual analytics with charts, category-wise breakdowns, multi-account management, advanced filters, and a 12-hour edit window for data integrity.
              </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold   text-white mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {/* React */}
                  <div className="px-4 py-2    bg-gray-700/50 rounded-lg    text-gray-300 font-medium border    border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      {/* React icon */}
                      <svg viewBox="0 0 128 128"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6">
                        <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                      </svg>
                    </span>
                    <span>React.js</span>
                  </div>

                  {/* Node.js */}
                  <div className="px-4 py-2    bg-gray-700/50 rounded-lg    text-gray-300 font-medium border    border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="1em" width="1em">
                        <rect width="256" height="256" fill="#3178C6" rx="16" />
                        <path fill="#fff" d="M112.5 116.4h-17.8v53.7h-16.5v-53.7H60.6v-13.5h51.9v13.5Zm68.2 32.7c-1.2-2.1-2.5-3.5-4-4.3-1.4-.7-3.6-1.1-6.6-1.1-3 0-5.3.4-7 .9-1.7.6-3.2 1.3-4.5 2.3l-.8.6-6.7-10.1 1.1-.9c2.7-2.2 5.7-3.8 9-4.8 3.2-1 7.1-1.5 11.6-1.5 5.6 0 10 .7 13.3 2.2 3.3 1.5 6.2 3.9 8.6 7.3 2.4 3.4 3.6 7.8 3.6 13.2v28.2h-16.5v-5.9c-1.9 2-3.8 3.5-5.9 4.4-2 .9-4.6 1.4-7.8 1.4-3.2 0-6-.5-8.4-1.4-2.5-.9-4.4-2.3-6-4.1-1.5-1.8-2.7-4-3.4-6.5-.8-2.5-1.1-5.3-1.1-8.4 0-3.3.4-6.1 1.1-8.6.7-2.5 1.8-4.6 3.3-6.4 1.4-1.8 3.3-3.2 5.6-4.1 2.2-.9 4.9-1.3 8.1-1.3 3.3 0 6 .5 8.1 1.4 2.1.9 4 2.6 5.7 5.1l.5.7-6.3 9.3Zm-13.7 13.5c1.8 0 3.3-.2 4.5-.7 1.2-.5 2.2-1.2 3-2.1.8-.9 1.4-2 1.7-3.3.3-1.3.5-2.7.5-4.2 0-1.4-.2-2.8-.5-4.1-.3-1.3-.9-2.4-1.7-3.3-.8-.9-1.8-1.6-3-2.1-1.2-.5-2.7-.7-4.5-.7-1.7 0-3.2.2-4.4.7-1.2.5-2.2 1.2-3 2.1-.8.9-1.4 2-1.7 3.3-.4 1.3-.5 2.7-.5 4.1 0 1.5.2 2.9.5 4.2.3 1.3.9 2.4 1.7 3.3.8.9 1.8 1.6 3 2.1 1.2.5 2.7.7 4.4.7Z" />
                      </svg>
                    </span>
                    <span>Typescript</span>
                  </div>

                  {/* Express.js */}
                  <div className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 font-medium border border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 272" height="1em" width="1em">
                        <path fill="#539E43" d="M128 .003 10.692 68.504v135.003L128 272l117.308-68.493V68.504z"/>
                        <path fill="#FFF" d="m182.238 181.799-13.005 7.473c-2.498 1.418-5.137 2.183-7.839 2.183-5.33 0-8.375-2.721-8.375-7.411v-47.744h-16.69v48.289c0 13.889 8.132 21.729 21.788 21.729 4.057 0 7.694-.727 11.325-2.269l12.796-7.242zm-49.492-67.181c-6.718 0-11.82 1.495-15.999 3.327-1.063.452-1.252.82-1.252 1.854v13.224c0 1.136.547 1.421 1.556 1.042 4.267-1.782 9.445-2.924 14.267-2.924 6.718 0 9.711 2.02 9.711 6.056 0 2.451-.977 4.096-3.115 5.006-2.225.977-5.696 1.989-9.69 3.267-10.267 3.3-15.72 8.321-15.72 18.787 0 10.825 8.261 17.593 21.234 17.593 5.62 0 10.313-.783 13.862-2.012 1.252-.463 1.334-1.215 1.334-2.225v-12.535c0-1.23-.63-1.61-1.672-1.136-3.568 1.499-8.183 2.25-12.319 2.25-5.38 0-8.222-1.733-8.222-5.015 0-2.498 1.06-4.096 3.391-5.183 2.206-1.06 6.083-2.1 9.191-3.124 8.969-3.044 13.693-8.14 13.693-18.293 0-10.873-8.252-17.733-20.861-17.733z"/>
                      </svg>
                    </span>
                    <span>Express.js</span>
                  </div>

                  {/* MongoDB */}
                  <div className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 font-medium border border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                        <path fill="#589636" d="M88 55.7C88 35.2 74.7 19.4 64.5 9.9c-.3-.3-.8-.3-1.1 0C53.3 19.4 40 35.2 40 55.7c0 13.7 5.7 24.5 14.9 31.3l2.5 18.3c.1.5.5.9 1 .9h11.3c.5 0 .9-.4 1-.9l2.5-18.3C82.3 80.2 88 69.4 88 55.7z"/>
                        <path fill="#65b247" d="M64 9.4C64 9.4 40 35.2 40 55.7c0 13.7 5.7 24.5 14.9 31.3l2.5 18.3c.1.5.5.9 1 .9H64V9.4z"/>
                      </svg>
                    </span>
                    <span>MongoDB</span>
                  </div>

                  {/* JWT */}
                  <div className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 font-medium border border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-pink-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </span>
                    <span>JWT</span>
                  </div>

                  {/* Recharts */}
                  <div className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 font-medium border border-gray-600 flex items-center gap-2">
                    <span className="text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                      </svg>
                    </span>
                    <span>Recharts</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-8">
                <a
                  href="https://github.com/harshitgupta0910/MoneyFlow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-700/50 text-white rounded-lg hover:bg-gray-600/50 transition-colors duration-300 font-medium"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008.12 10.98c.6.11.82-.26.82-.58v-2.06c-3.3.72-4-1.6-4-1.6a3.14 3.14 0 00-1.3-1.7c-1.07-.74.08-.73.08-.73a2.5 2.5 0 011.83 1.23 2.54 2.54 0 003.47 1 2.53 2.53 0 01.76-1.6c-2.64-.3-5.42-1.32-5.42-5.88a4.6 4.6 0 011.22-3.17 4.27 4.27 0 01.12-3.13s1-.33 3.3 1.23a11.37 11.37 0 016 0c2.3-1.56 3.3-1.23 3.3-1.23a4.27 4.27 0 01.12 3.13 4.6 4.6 0 011.22 3.17c0 4.57-2.78 5.58-5.43 5.87a2.84 2.84 0 01.81 2.2v3.27c0 .32.22.7.83.58A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" clipRule="evenodd" />
                  </svg>
                  <span>View Code</span>
                </a>

                <a
                  href="https://money-flow-fawn.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#34b1ff] text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r group-hover:from-[#a855f7] group-hover:via-indigo-500 group-hover:to-blue-400 translate-x-0 group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0"></span>
                  <span className="relative z-10 flex items-center justify-center gap-2 w-full">
                    🚀 Live Demo
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

          </div>


        </div>

        {/* GitHub CTA Button */}
        <motion.div
          className="max-w-4xl mx-auto mt-16 text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            href="https://github.com/harshitgupta0910"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg bg-[#359fef] text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r group-hover:from-[#EC4899] group-hover:via-purple-400 group-hover:to-purple-200 translate-x-0 group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0"></span>

            <span className="relative z-10 flex items-center justify-center gap-2 w-full">
              View More on GitHub
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
              >
                <path
                  fillRule="evenodd"
                  d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008.12 10.98c.6.11.82-.26.82-.58v-2.06c-3.3.72-4-1.6-4-1.6a3.14 3.14 0 00-1.3-1.7c-1.07-.74.08-.73.08-.73a2.5 2.5 0 011.83 1.23 2.54 2.54 0 003.47 1 2.53 2.53 0 01.76-1.6c-2.64-.3-5.42-1.32-5.42-5.88a4.6 4.6 0 011.22-3.17 4.27 4.27 0 01.12-3.13s1-.33 3.3 1.23a11.37 11.37 0 016 0c2.3-1.56 3.3-1.23 3.3-1.23a4.27 4.27 0 01.12 3.13 4.6 4.6 0 011.22 3.17c0 4.57-2.78 5.58-5.43 5.87a2.84 2.84 0 01.81 2.2v3.27c0 .32.22.7.83.58A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </motion.a>
        </motion.div>

        <br /> <br />
      </div>
    </main>
  );
};

export default Projects;
