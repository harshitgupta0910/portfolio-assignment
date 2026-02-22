import React, { useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Mail from "../assets/mail.svg";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

interface SocialLink {
  name: string;
  url: string;
}

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    
    if (!form.current) return;

    emailjs
      .sendForm("service_kxbaj3p", "template_pyxdxnx", form.current, "BoVOKp77hAWsKBdAt")
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
    (e.target as HTMLFormElement).reset();
  };

  const socialLinks: SocialLink[] = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/harshit-gupta-6bb680259/" },
    { name: "GitHub", url: "https://github.com/harshitgupta0910" },
    { name: "Linktree", url: "https://linktr.ee/harshit0123" },
  ];

  return (
    <main className="pt-16">
      <div className="min-h-screen py-0 px-4 bg-gradient-to-b from-gray-900 to-gray-800 relative">
        {/* Header */}
        <div className="relative text-center mb-16">
          <span className="inline-block px-6 py-0 text-rose-500 text-base font-medium mb-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            Get in Touch
          </span>
          <div className="group">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-normal pb-2 bg-gradient-to-r from-blue-400 to-[#05cdff] bg-clip-text text-transparent hover:scale-[1.01] transform transition-all duration-500">
              Let's Connect
            </h1>
          </div>
          <p className="text-lg text-[#4AC98F]">
            I'm always open to discussing new projects and opportunities
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-3 bg-gray-800/80 backdrop-blur-lg rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700"
          >
            <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-6">
              {["Name", "Email", "Subject"].map((label, index) => (
                <div key={index}>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
                  <input
                    name={`user_${label.toLowerCase()}`}
                    type={label === "Email" ? "email" : "text"}
                    placeholder={
                      label === "Name"
                        ? "John Doe"
                        : label === "Email"
                        ? "john@example.com"
                        : "How can I help you?"
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white transition-colors duration-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                  name="message"
                  rows={8}
                  placeholder="Your message here..."
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-700 text-white transition-colors duration-200 resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <button
                type="submit"
                className="group relative inline-flex justify-center py-4 px-6 rounded-xl text-white font-medium bg-[#359fef] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r group-hover:from-[#EC4899] group-hover:via-purple-400 group-hover:to-purple-200 translate-x-0 group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Send Message
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </form>
          </motion.div>

          {/* Info & Social */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-[#08CBD2] mb-6">Contact Info</h2>
              <div className="space-y-6 text-gray-300">
                <a href="mailto:harshitgupta0910@gmail.com" className="flex items-center gap-4 hover:text-primary-400 transition-colors">
                  <div className="w-12 h-12 bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm">harshitgupta0910@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 2c4.418 0 8 3.582 8 8 0 5.25-8 12-8 12s-8-6.75-8-12c0-4.418 3.582-8 8-8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm">Kanpur, Uttar Pradesh</p>
                  </div>
                </div>

                <a
                  href="https://drive.google.com/file/d/1mQpcOMe-YoPB0Zy38pVKY2EzsxDpUxfU/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center w-full px-8 py-4 rounded-xl text-white font-medium bg-[#359fef] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r group-hover:from-[#EC4899] group-hover:via-purple-400 group-hover:to-purple-200 translate-x-0 group-hover:translate-x-full transition-transform duration-700 ease-in-out z-0"></span>
                  <span className="relative z-10 flex items-center gap-2">
                    📄 Download Resume
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="bg-gray-800/80 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-[#08CBD2] mb-6">Find Me Online</h2>
              <div className="flex flex-col sm:flex-row gap-4 text-gray-300">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 px-6 flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-700/50 hover:bg-primary-900/30 hover:text-primary-400 transition-all"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mail Illustration */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="flex justify-center items-center"
            >
              <img
                src={Mail}
                alt="Contact Illustration"
                className="w-full max-w-sm h-auto object-contain transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </div>
        <br /><br />
      </div>
    </main>
  );
};

export default Contact;
