"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarArray, NavbarItemType } from "@/components/utils/NavbarArrayAndTypes";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="fixed left-5 right-5 mx-auto w-[85%] max-w-[1500px] bg-white z-50 rounded-full mt-[-35px] shadow-[0_8px_25px_rgba(0,0,0,0.12)] border border-gray-100">
      <div className="flex items-center justify-between px-8 py-1">
        {/* Logo */}
        <div className="flex items-center h-16">
          <div className="h-32 w-32 flex items-center justify-center overflow-hidden">
            <img src="/Logo/Logo.png" alt="Packega logo" className="h-full w-auto object-contain scale-125" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {NavbarArray.map((item: NavbarItemType, index: number) => {
            const Icon = item.icon;
            return (
              <div key={index} className="relative group" onMouseEnter={() => setOpenDropdown(item.label)} onMouseLeave={() => setOpenDropdown(null)}>
                {item.isDropDown ? (
                  <>
                    <button className="nav-link flex items-center space-x-2">
                      <Icon />
                      <span>{item.label}</span>
                      <FaChevronDown className="text-xs mt-[2px]" />
                    </button>
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 bg-white shadow-xl rounded-2xl mt-3 w-56 border border-gray-100 overflow-hidden z-50"
                        >
                          {item.dropDownData?.map((dropItem, i) => {
                            const DropIcon = dropItem.icon;
                            return (
                              <Link
                                key={i}
                                href={dropItem.href}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-[#fefbea] transition-all text-[#2c4658] font-medium"
                              >
                                <DropIcon />
                                <span>{dropItem.label}</span>
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link href={item.href} className="nav-link flex items-center space-x-2">
                    <Icon />
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact button */}
        <div className="hidden lg:block">
          <Link href="/contact" className="contact-btn flex items-center space-x-2">
            <FaPhoneAlt />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-[#2c4658]">
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex justify-end lg:hidden"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.35 }}
              className="w-72 h-full bg-white border-l border-gray-100 p-6 flex flex-col space-y-3 overflow-y-auto"
            >
              {/* Logo */}
              <div className="flex justify-between items-center mb-4">
                <img src="/Logo/Logo.png" alt="Packega logo" className="h-full w-auto object-contain scale-125" />
              </div>

              {/* Mobile Links */}
              {NavbarArray.map((item: NavbarItemType, index: number) => {
                const Icon = item.icon;
                return (
                  <div key={index}>
                    {item.isDropDown ? (
                      <>
                        <button onClick={() => toggleDropdown(item.label)} className="mobile-link flex justify-between items-center w-full">
                          <div className="flex items-center gap-2">
                            <Icon />
                            <span>{item.label}</span>
                          </div>
                          <FaChevronDown className={`transition-transform duration-300 ${openDropdown === item.label ? "rotate-180 text-[#3c6e71]" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {openDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.25 }}
                              className=" mt-2 rounded-xl bg-white/80 shadow-sm backdrop-blur-md border border-gray-100 overflow-hidden"
                            >
                             {item.dropDownData?.map((dropItem, i) => {
  const DropIcon = dropItem.icon;
  return (
    <Link
      key={i}
      href={dropItem.href}
      className="flex items-center text-sm font-medium text-[#2c4658] hover:bg-[#fefbea] transition-all"
    >
      <DropIcon />
      <span>{dropItem.label}</span>
    </Link>
  );
})}

                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link href={item.href} className="mobile-link flex items-center">
                        <Icon />
                        <span>{item.label}</span>
                      </Link>
                    )}
                  </div>
                );
              })}


            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
