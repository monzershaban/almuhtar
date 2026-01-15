"use client";

import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa"; 
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content";
import Image from "next/image";
import logo from "@/public/assets/logo.png";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // --- ضع رقم هاتفك هنا ---
  const whatsappNumber = "+905348939441"; 
  const whatsappMessage = encodeURIComponent("مرحباً المُخْتَار، أريد المزيد من التفاصيل.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = siteContent.header.navItems;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : isMobileMenuOpen
          ? "bg-white"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3">
        <nav className="grid grid-cols-2 md:grid-cols-3 justify-between items-center">
          <div className="row-span-2 flex justify-start">
            <Image
              src={logo}
              alt="المختار"
              width={60}
              height={20}
              className="object-contain select-none"
              priority
            />
          </div>

          <ul className="hidden md:flex row-span-8 items-center justify-center gap-4 text-lg font-semibold tracking-wide">
            {navItems.map((item) => (
              <li key={item.id} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-accent transition-colors duration-300"
                >
                  {item.label}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full"></span>
                </button>
              </li>
            ))}
          </ul>

          <div className="row-span-2 flex justify-end items-center">
            {/* Desktop WhatsApp Button (Green) */}
            <div className="hidden md:block">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center gap-2 border-none transition-all duration-300 shadow-sm hover:shadow-lg"
                >
                  <FaWhatsapp size={22} />
                  تواصل معنا
                </Button>
              </a>
            </div>

            <button
              className="md:hidden row-span-6 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes size={26} className="transition-transform duration-300" />
              ) : (
                <FaBars size={26} className="transition-transform duration-300" />
              )}
            </button>
          </div>
        </nav>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <ul className="flex flex-col gap-4 p-4 text-lg font-medium">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-foreground hover:text-accent transition-colors w-full text-right"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                {/* Mobile WhatsApp Button (Green) */}
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="lg"
                    className="w-full cursor-pointer bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2 border-none shadow-md"
                  >
                    <FaWhatsapp size={22} />
                    تواصل معنا عبر واتساب
                  </Button>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
