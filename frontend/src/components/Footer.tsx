import React from "react";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex justify-center gap-6 mb-6"
      >
        <div className="container mx-auto px-4 py-10">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            {/* Email */}
            <a
              href="mailto:harshitgupta0910@gmail.com"
              className="group hover:text-primary-600 transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M1.5 4.5A2.5 2.5 0 014 2h16a2.5 2.5 0 012.5 2.5v15a2.5 2.5 0 01-2.5 2.5H4a2.5 2.5 0 01-2.5-2.5v-15zm18.5 0H4l8 6 8-6zm-8 7.5L4 6v13h16V6l-8 6z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/harshit-gupta-6bb680259/"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:text-primary-600 transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/harshitgupta0910"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:text-primary-600 transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.207 11.387c.6.11.793-.26.793-.577v-2.06c-3.338.726-4.042-1.61-4.042-1.61-.547-1.387-1.335-1.757-1.335-1.757-1.092-.746.082-.731.082-.731 1.205.085 1.84 1.237 1.84 1.237 1.072 1.834 2.812 1.304 3.497.997.107-.776.42-1.305.763-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23A11.52 11.52 0 0112 6.844c1.02.005 2.046.138 3.005.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.652.243 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.624-5.48 5.92.431.372.816 1.104.816 2.226 0 1.605-.015 2.9-.015 3.293 0 .32.192.694.8.576A12.003 12.003 0 0024 12c0-6.63-5.37-12-12-12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* Linktree */}
            <a
              href="https://linktr.ee/harshit0123"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:text-primary-600 transition-transform transform hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="m13.73635 5.85251 4.00467-4.11665 2.3248 2.3808-4.20064 4.00466h5.9085v3.30473h-5.9365l4.22865 4.10766-2.3248 2.3338L12.0005 12.099l-5.74052 5.76852-2.3248-2.3248 4.22864-4.10766h-5.9375V8.12132h5.9085L3.93417 4.11666l2.3248-2.3808 4.00468 4.11665V0h3.4727zm-3.4727 10.30614h3.4727V24h-3.4727z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-center text-white">
             Harshit Gupta © 2025.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
