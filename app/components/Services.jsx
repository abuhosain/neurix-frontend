"use client";

import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import domain from "../../public/assets/services/domain.png";
import cloud from "../../public/assets/services/cloud.png";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const arrowVariants = {
    hover: {
      x: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="pt-28 pb-10">
      <motion.div
        className="w-10/12 mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h4
          className="text-[#D0D5DD] text-lg md:text-xl mb-3 font-semibold"
          variants={itemVariants}
        >
          Our Services
        </motion.h4>
        <motion.h2
          className="text-white text-3xl md:text-5xl md:w-5/6 lg:w-3/6 leading-[120%]"
          variants={itemVariants}
        >
          Everything You Need to <br /> Launch & Grow Online
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-10 pt-16"
          variants={itemVariants}
        >
          {/* Domains Card */}
          <motion.div
            className="text-white rounded-lg p-6 md:p-8 lg:w-[50%] w-full cursor-pointer"
            style={{
              background: "linear-gradient(to right, #111c24, #121314)",
              borderLeft: "2px solid #132129",
              borderRight: "2px solid #132129",
              borderBottom: "2px solid #132129",
              borderTop: "none",
              borderRadius: "20px",
            }}
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div variants={iconVariants}>
              <Image
                className="bg-[#283038] h-14 w-14 md:h-16 md:w-16 rounded-full p-3 md:p-4 mb-6 md:mb-8"
                src={domain}
                alt="Domain icon"
                width={64}
                height={64}
              />
            </motion.div>
            <motion.h4
              className="text-xl md:text-2xl mb-2 md:mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Domains
            </motion.h4>
            <motion.p
              className="text-[#99AAB6] text-base md:text-xl mb-4 md:mb-5 lg:mb-7 lg:w-11/12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Easy-to-manage domains designed to grow with <br /> your business.
            </motion.p>
            <motion.a
              href="#"
              className="flex items-center gap-1 text-sm md:text-base font-light group"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                textDecorationThickness: "0.5px",
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Get Your Domain
              <motion.div variants={arrowVariants}>
                <MdKeyboardArrowRight className="text-base md:text-base group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Cloud Services Card */}
          <motion.div
            className="text-white rounded-lg p-6 md:p-8 lg:w-[50%] w-full cursor-pointer"
            style={{
              background: "linear-gradient(to right, #111c24, #121314)",
              borderLeft: "2px solid #132129",
              borderRight: "2px solid #132129",
              borderBottom: "2px solid #132129",
              borderTop: "none",
              borderRadius: "20px",
            }}
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="flex justify-between items-start mb-6 md:mb-8">
              <motion.div variants={iconVariants}>
                <Image
                  className="bg-[#283038] h-14 w-14 md:h-16 md:w-16 rounded-full p-3 md:p-4"
                  src={cloud}
                  alt="Cloud services icon"
                  width={64}
                  height={64}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-[#0A80D7] bg-[#11222d] px-3 md:px-4 py-1 md:py-1.5 rounded-full text-xs md:text-sm">
                  Coming soon
                </p>
              </motion.div>
            </div>
            <motion.h4
              className="text-xl md:text-2xl mb-2 md:mb-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Cloud Services
            </motion.h4>
            <motion.p
              className="text-[#99AAB6] text-base md:text-xl mb-4 md:mb-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Scalable, secure, and lightning-fast{" "}
              <br className="hidden sm:block" /> cloud solutions.
            </motion.p>
            <motion.a
              href="#"
              className="flex items-center gap-1 text-sm md:text-base font-light group"
              style={{
                textDecoration: "underline",
                textUnderlineOffset: "5px",
                textDecorationThickness: "0.5px",
              }}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            >
              Learn More
              <motion.div variants={arrowVariants}>
                <MdKeyboardArrowRight className="text-base md:text-base group-hover:translate-x-1 transition-transform duration-300" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
