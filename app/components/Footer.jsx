"use client";

import { motion } from "framer-motion";
import { FaDiscord } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

import chat from "@/public/assets/footer/chat.png";
import pay from "@/public/assets/footer/pay-with.png";
import mainLogo from "@/public//main-logo.png";
 

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hover: {
      scale: 1.1,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const linkVariants = {
    hover: {
      x: 3,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <footer
      style={{
        background: "linear-gradient(to bottom, #161f2a, #091116)",
      }}
    >
      <motion.section
        className="w-full md:w-10/12 mx-auto footer sm:footer-horizontal text-white py-8 md:py-10 px-4 md:px-6 lg:px-0 lg:py-10 font-light"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.aside className="mb-8 lg:mb-0" variants={itemVariants}>
          <Image
            src={mainLogo}
            alt="Neurix Logo"
            width={200}
            height={56}
            className="h-12 md:h-14 w-auto"
          />
          <p className="text-[#FFFFFFB8] text-sm lg:text-base mt-3 leading-relaxed max-w-xs">
            Neurix is the powerful cloud platform{" "}
            <br className="hidden sm:block" />
            for ambitious eCommerce brands and{" "}
            <br className="hidden sm:block" />
            SaaS startups — fast to deploy, easy{" "}
            <br className="hidden sm:block" />
            to manage, and ready to scale.
          </p>
          <div className="flex gap-2 mt-6 md:mt-8 lg:mt-10">
            <motion.a
              href="#"
              variants={socialIconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaTiktok className="h-8 w-8 md:h-10 md:w-10 bg-[#bac0c425] p-2 md:p-2.5 rounded-full hover:bg-[#1488fc] transition-colors duration-300" />
            </motion.a>
            <motion.a
              href="#"
              variants={socialIconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaFacebook className="h-8 w-8 md:h-10 md:w-10 bg-[#1c2328] p-2 md:p-2.5 rounded-full hover:bg-[#1488fc] transition-colors duration-300" />
            </motion.a>
            <motion.a
              href="#"
              variants={socialIconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <AiFillInstagram className="h-8 w-8 md:h-10 md:w-10 bg-[#1c2328] p-2 md:p-2.5 rounded-full hover:bg-[#1488fc] transition-colors duration-300" />
            </motion.a>
            <motion.a
              href="#"
              variants={socialIconVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <FaDiscord className="h-8 w-8 md:h-10 md:w-10 bg-[#1c2328] p-2 md:p-2.5 rounded-full hover:bg-[#1488fc] transition-colors duration-300" />
            </motion.a>
          </div>
        </motion.aside>

        <motion.nav className="mb-6 lg:mb-0" variants={itemVariants}>
          <h6 className="text-[#FFFFFFE0] text-base md:text-lg capitalize font-normal mb-3 md:mb-4">
            Our Products
          </h6>
          <div className="flex flex-col space-y-2">
            <motion.a
              href="#"
              className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white transition-colors duration-200"
              variants={linkVariants}
              whileHover="hover"
            >
              Domains
            </motion.a>
            <motion.a
              href="#"
              className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white transition-colors duration-200"
              variants={linkVariants}
              whileHover="hover"
            >
              Cloud Services
            </motion.a>
          </div>
        </motion.nav>

        <motion.nav className="mb-6 lg:mb-0" variants={itemVariants}>
          <h6 className="text-[#FFFFFFE0] text-base md:text-lg capitalize font-normal mb-3 md:mb-4">
            Company
          </h6>
          <div className="flex flex-col space-y-2">
            <motion.a
              href="#"
              className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white transition-colors duration-200"
              variants={linkVariants}
              whileHover="hover"
            >
              About
            </motion.a>
            <motion.a
              href="#"
              className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white transition-colors duration-200"
              variants={linkVariants}
              whileHover="hover"
            >
              Contact us
            </motion.a>
            <motion.a
              href="#"
              className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white transition-colors duration-200"
              variants={linkVariants}
              whileHover="hover"
            >
              Why Neurix
            </motion.a>
            <motion.a
              href="#"
              className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white transition-colors duration-200"
              variants={linkVariants}
              whileHover="hover"
            >
              Blog
            </motion.a>
          </div>
        </motion.nav>

        <motion.nav className="mb-6 lg:mb-0" variants={itemVariants}>
          <h6 className="text-[#FFFFFFE0] text-base md:text-lg capitalize font-normal mb-3 md:mb-4">
            Legal
          </h6>
          <div className="flex flex-col space-y-2">
            <motion.a
              href="#"
              className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white transition-colors duration-200"
              variants={linkVariants}
              whileHover="hover"
            >
              Refund Policy
            </motion.a>
            <motion.div variants={linkVariants} whileHover="hover">
              <Link
                href="/terms_&_conditions"
                className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white transition-colors duration-200"
              >
                Affiliate Terms
              </Link>
            </motion.div>
            <motion.a
              href="#"
              className="link link-hover text-[#FFFFFFB8] text-sm hover:text-white transition-colors duration-200"
              variants={linkVariants}
              whileHover="hover"
            >
              Cookie Policy
            </motion.a>
          </div>
        </motion.nav>

        <motion.nav variants={itemVariants}>
          <h6 className="text-[#FFFFFFE0] text-base md:text-lg capitalize font-normal mb-3 md:mb-4">
            Office Address
          </h6>
          <div className="flex flex-col space-y-2 mb-6 md:mb-8">
            <span className="text-[#FFFFFFB8] text-sm leading-relaxed">
              Registered Address: 40 Penarth Road,
              <br />
              Cardiff, Wales, CF10 5GP, United Kingdom.
            </span>
            <span className="text-[#FFFFFFB8] text-sm">
              Company Number (UK): 15189998
            </span>
          </div>
          <motion.a
            href="#"
            className="bg-[#FFFFFF29] text-white text-xs md:text-sm lg:text-base px-4 py-2.5 md:px-6 md:py-3 lg:px-9 lg:py-4 rounded-full flex items-center justify-center gap-2 w-full max-w-[200px] md:max-w-[240px] lg:max-w-[280px] cursor-pointer hover:bg-gradient-to-r from-[#1488fc] to-[#042f4e] transition-all duration-300 hover:text-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Image
              src={chat}
              alt="Chat icon"
              width={20}
              height={20}
              className="h-4 w-4 md:h-5 md:w-5"
            />
            Chat with Messenger
          </motion.a>
        </motion.nav>
      </motion.section>

      <div className="border-t border-[#171e23]">
        <motion.div
          className="w-full md:w-10/12 mx-auto text-white flex flex-col lg:flex-row items-center justify-between gap-4 p-4 md:p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xs md:text-sm text-white font-light text-center lg:text-left">
            <span className="text-[#939EA7]">
              © 2025 Neurix. All rights reserved
            </span>{" "}
            <a
              href="#"
              className="hover:text-[#1488fc] transition-colors duration-200"
            >
              | Powered by Nextup Global Ltd
            </a>
          </p>
          <div className="w-full max-w-[200px] md:max-w-[300px] lg:w-[50%]">
            <Image
              src={pay}
              alt="Payment methods"
              width={300}
              height={40}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
