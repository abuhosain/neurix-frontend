"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { FiUser, FiChevronDown } from "react-icons/fi";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import cloud from "/public/assets/services/cloud.png";
import regDomain from "/public/assets/services/domain.png";
import transDomain from "/public/assets/nav/switch-horizontal.png";
import domainPricing from "/public/assets/nav/dollar-circle.png";
import mainLogo from "../../public/main-logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  }

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  }

  const productItems = [
    {
      icon: cloud,
      title: "Cloud Services",
      description: "Scalable cloud solutions",
      href: "#",
    },
  ]

  const domainItems = [
    {
      icon: regDomain,
      title: "Register Domain",
      description: "Find your perfect domain",
      href: "#",
    },
    {
      icon: transDomain,
      title: "Transfer Domain",
      description: "Move your domain to us",
      href: "#",
    },
    {
      icon: domainPricing,
      title: "Domain Pricing",
      description: "Transparent pricing",
      href: "#",
    },
  ]

  return (
    <>
      {/* Custom CSS to override DaisyUI styles */}
      <style jsx global>{`
        .navbar .menu li > *:focus,
        .navbar .menu li > *:focus-visible,
        .navbar .menu li > *:active,
        .navbar .btn:focus,
        .navbar .btn:focus-visible,
        .navbar .btn:active,
        .navbar .btn-ghost:focus,
        .navbar .btn-ghost:focus-visible,
        .navbar .btn-ghost:active {
          background-color: transparent !important;
          outline: none !important;
          box-shadow: none !important;
        }
        
        .navbar .menu li > a:focus,
        .navbar .menu li > a:focus-visible,
        .navbar .menu li > a:active {
          color: white !important;
          background-color: transparent !important;
        }
        
        .navbar .menu li > button:focus,
        .navbar .menu li > button:focus-visible,
        .navbar .menu li > button:active {
          color: white !important;
          background-color: transparent !important;
        }
      `}</style>

      <nav className="w-11/12 md:w-10/12 mx-auto relative z-50">
        <div className="navbar text-white p-3">
          {/* Mobile Menu Button & Logo */}
          <div className="navbar-start">
            <motion.button
              className="btn btn-ghost bg-transparent border-none lg:hidden p-2"
              style={{ backgroundColor: 'transparent' }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <HiX className="h-6 w-6" />
                ) : (
                  <HiMenuAlt3 className="h-6 w-6" />
                )}
              </motion.div>
            </motion.button>
            <motion.a
              href="#"
              className="cursor-pointer mr-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Image
                src={mainLogo}
                alt="Neurix Logo"
                width={211}
                height={57}
                className="w-auto h-10 md:h-12 lg:h-14"
                priority
              />
            </motion.a>
          </div>

          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-6 text-[#FFFFFFB3] text-[16px] font-light">
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                  style={{ backgroundColor: 'transparent' }}
                  whileHover={{ y: -1 }}
                >
                  Home
                </motion.a>
              </li>

              {/* Product Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => setActiveDropdown("product")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.button
                  className="flex items-center gap-1 text-[#FFFFFFB3] font-light hover:text-white transition-colors duration-200"
                  style={{ backgroundColor: 'transparent' }}
                  whileHover={{ y: -1 }}
                  onClick={() => setActiveDropdown(activeDropdown === "product" ? null : "product")}
                >
                  Product
                  <motion.div
                    animate={{ rotate: activeDropdown === "product" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiChevronDown className="h-4 w-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === "product" && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 z-20"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <div
                        className="w-72 rounded-xl shadow-2xl border border-[#1a2a4c] overflow-hidden backdrop-blur-md"
                        style={{
                          background: "linear-gradient(to bottom, #071f44, #071227)",
                        }}
                      >
                        <div className="p-4">
                          <h3 className="text-white font-semibold mb-3 text-sm">
                            Our Products
                          </h3>
                          {productItems.map((item, index) => (
                            <motion.a
                              key={index}
                              href={item.href}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#0a1a3a] transition-all duration-200 group/item"
                              style={{ backgroundColor: 'transparent' }}
                              whileHover={{ x: 5 }}
                              onClick={() => setActiveDropdown(null)}
                            >
                              <div className="relative">
                                <Image
                                  src={item.icon || "/placeholder.svg"}
                                  alt={item.title}
                                  width={36}
                                  height={36}
                                  className="h-9 w-9 bg-[#15274a] rounded-full p-2"
                                />
                              </div>
                              <div className="flex-1">
                                <div className="text-white text-sm font-medium group-hover/item:text-[#1488fc] transition-colors">
                                  {item.title}
                                </div>
                                <div className="text-[#99AAB6] text-xs">
                                  {item.description}
                                </div>
                              </div>
                              <FiChevronDown className="h-4 w-4 text-[#99AAB6] rotate-[-90deg] group-hover/item:text-[#1488fc] transition-colors" />
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* Domain Dropdown */}
              <li
                className="relative group"
                onMouseEnter={() => setActiveDropdown("domain")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.button
                  className="flex items-center gap-1 text-[#FFFFFFB3] font-light hover:text-white transition-colors duration-200"
                  style={{ backgroundColor: 'transparent' }}
                  whileHover={{ y: -1 }}
                  onClick={() => setActiveDropdown(activeDropdown === "domain" ? null : "domain")}
                >
                  Domain
                  <motion.div
                    animate={{ rotate: activeDropdown === "domain" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiChevronDown className="h-4 w-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === "domain" && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 z-20"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <div
                        className="w-72 rounded-xl shadow-2xl border border-[#1a2a4c] overflow-hidden backdrop-blur-md"
                        style={{
                          background: "linear-gradient(to bottom, #071f44, #071227)",
                        }}
                      >
                        <div className="p-4">
                          <h3 className="text-white font-semibold mb-3 text-sm">
                            Domain Services
                          </h3>
                          {domainItems.map((item, index) => (
                            <motion.a
                              key={index}
                              href={item.href}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#0a1a3a] transition-all duration-200 group/item"
                              style={{ backgroundColor: 'transparent' }}
                              whileHover={{ x: 5 }}
                              onClick={() => setActiveDropdown(null)}
                            >
                              <Image
                                src={item.icon || "/placeholder.svg"}
                                alt={item.title}
                                width={36}
                                height={36}
                                className="h-9 w-9 bg-[#15274a] rounded-full p-2"
                              />
                              <div className="flex-1">
                                <div className="text-white text-sm font-medium group-hover/item:text-[#1488fc] transition-colors">
                                  {item.title}
                                </div>
                                <div className="text-[#99AAB6] text-xs">
                                  {item.description}
                                </div>
                              </div>
                              <FiChevronDown className="h-4 w-4 text-[#99AAB6] rotate-[-90deg] group-hover/item:text-[#1488fc] transition-colors" />
                            </motion.a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                  style={{ backgroundColor: 'transparent' }}
                  whileHover={{ y: -1 }}
                >
                  Pricing
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                  style={{ backgroundColor: 'transparent' }}
                  whileHover={{ y: -1 }}
                >
                  About
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="navbar-end">
            <motion.a
              href="#"
              className="mr-2 md:mr-6 text-xs md:text-base text-[#FFFFFFB3] font-light hover:text-white transition-colors duration-200"
              whileHover={{ y: -1 }}
            >
              Support
            </motion.a>
            <motion.a
              href="#"
              className="bg-white text-black flex gap-1 md:gap-2 items-center font-normal text-xs md:text-[16px] rounded-full px-2.5 py-1.5 md:px-6 md:py-3 border-0 hover:bg-gradient-to-r from-[#1488fc] to-[#042f4e] transition-all duration-300 hover:text-white shadow-lg"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiUser className="text-xs md:text-[20px]" />
              <span className="hidden text-sm sm:inline">Client Area</span>
              <span className="sm:hidden">Login</span>
            </motion.a>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 z-40"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div
                className="mx-4 mt-2 rounded-xl shadow-2xl border border-[#1a2a4c] overflow-hidden backdrop-blur-md"
                style={{
                  background: "linear-gradient(to bottom, #072045, #081124)",
                }}
              >
                <div className="p-4 space-y-2">
                  <motion.a
                    href="/"
                    className="block p-3 rounded-lg hover:bg-[#0a1a3a] transition-colors text-white"
                    style={{ backgroundColor: 'transparent' }}
                    variants={mobileItemVariants}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </motion.a>

                  {/* Mobile Product Section */}
                  <motion.div variants={mobileItemVariants}>
                    <div className="p-3 text-white font-medium">Product</div>
                    <div className="ml-4 space-y-2">
                      {productItems.map((item, index) => (
                        <motion.a
                          key={index}
                          href={item.href}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#0a1a3a] transition-colors"
                          style={{ backgroundColor: 'transparent' }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Image
                            src={item.icon || "/placeholder.svg"}
                            alt={item.title}
                            width={24}
                            height={24}
                            className="h-6 w-6 bg-[#15274a] rounded-full p-1"
                          />
                          <span className="text-[#E2E2E2] text-sm">
                            {item.title}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>

                  {/* Mobile Domain Section */}
                  <motion.div variants={mobileItemVariants}>
                    <div className="p-3 text-white font-medium">Domain</div>
                    <div className="ml-4 space-y-2">
                      {domainItems.map((item, index) => (
                        <motion.a
                          key={index}
                          href={item.href}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#0a1a3a] transition-colors"
                          style={{ backgroundColor: 'transparent' }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <Image
                            src={item.icon || "/placeholder.svg"}
                            alt={item.title}
                            width={24}
                            height={24}
                            className="h-6 w-6 bg-[#15274a] rounded-full p-1"
                          />
                          <span className="text-[#E2E2E2] text-sm">
                            {item.title}
                          </span>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>

                  <motion.a
                    href="#"
                    className="block p-3 rounded-lg hover:bg-[#0a1a3a] transition-colors text-white"
                    style={{ backgroundColor: 'transparent' }}
                    variants={mobileItemVariants}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Pricing
                  </motion.a>
                  <motion.a
                    href="#"
                    className="block p-3 rounded-lg hover:bg-[#0a1a3a] transition-colors text-white"
                    style={{ backgroundColor: 'transparent' }}
                    variants={mobileItemVariants}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
