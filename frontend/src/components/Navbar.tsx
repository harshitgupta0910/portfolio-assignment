import React, { useState, useEffect } from "react";
import SidLogo from "../assets/Sid_logo.svg";
import { Menu, X } from "lucide-react";

const sections: string[] = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const toggleMenu = (): void => setIsOpen(!isOpen);
  const closeMenu = (): void => setIsOpen(false);

  const scrollToSection = (sectionId: string): void => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = (): void => {
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80) {
            setActiveSection(section.toLowerCase());
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = (section: string): string => {
    const isActive = activeSection === section.toLowerCase();
    return `group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
      isActive
        ? "bg-primary-600 text-blue-500 border-transparent"
        : "bg-gradient-to-r from-primary-600 to-primary-500 text-white border-transparent"
    } hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] border-2 transition-all duration-300 hover:scale-105 cursor-pointer`;
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-md z-50 shadow-lg shadow-gray-800/30">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <button onClick={() => scrollToSection("home")} className="flex items-center bg-transparent border-none cursor-pointer">
          <img src={SidLogo} alt="Sid Logo" className="h-14 w-auto" />
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={navLinkClass(item)}
            >
              {item}
            </button>
          ))}

          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1mQpcOMe-YoPB0Zy38pVKY2EzsxDpUxfU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300 hover:scale-105"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 shadow-lg px-4 py-4 space-y-4">
          {sections.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`block w-full text-left px-4 py-2 rounded-md text-sm font-medium ${
                activeSection === item.toLowerCase()
                  ? "bg-primary-600 text-blue-100"
                  : "bg-gradient-to-r from-primary-600 to-primary-500 text-white"
              } hover:shadow-md hover:scale-[1.02] transition duration-200`}
            >
              {item}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1fA0pYpRCq1ZNhu7vPXmNSHgqEFrsJA5B/view"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:scale-105 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
