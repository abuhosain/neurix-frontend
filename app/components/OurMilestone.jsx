"use client";

import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import handBlue from "@/public/assets/our-milestone/hand-blue-logo-min.jpg";
import power from "@/public/assets/our-milestone/power.png";

export default function OurMilestone() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const milestoneData = [
    { value: "95.6%", label: "Client Satisfaction" },
    { value: "3+", label: "Years of Service" },
    { value: "1,500+", label: "Domains Live" },
  ];

  return (
    <motion.section
      className="text-white flex flex-col items-center pb-30 bg-cover bg-top bg-no-repeat mt-10"
      style={{
        backgroundImage: "url('/assets/our-milestone/galaxy-circle-min.png')",
      }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="-mt-10 " variants={imageVariants}>
        <Image
          src={handBlue || "/placeholder.svg"}
          alt="Hand Logo"
          className="mx-auto mix-blend-lighten w-[462px] h-[462px]"
          width={462}
          height={462}
          priority
        />
      </motion.div>

      <motion.div className="-mt-8" variants={itemVariants}>
        <motion.div className="w-full" variants={itemVariants}>
          <motion.h1
            className="text-[30px] md:text-[38px] lg:text-[50px] font-semibold text-center leading-[115%]"
            variants={itemVariants}
          >
            Ready to Launch Your
            <br />
            Business Online?
          </motion.h1>
          <motion.div
            className="text-[#FFFFFFCC] text-lg md:text-xl flex gap-2 justify-center mt-8 items-center uppercase"
            variants={itemVariants}
          >
            <Image
              src={power}
              alt="Power Icon"
              width={24}
              height={24}
              className="h-6 w-6"
            />
            Our Milestone
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-1.5 md:gap-4 px-4"
          variants={containerVariants}
        >
          {milestoneData.map((milestone, index) => (
            <motion.div
              key={index}
              className="mt-6 px-2 py-3 rounded-lg md:rounded-xl border border-gray-800 cursor-pointer"
              style={{
                background:
                  index === 0
                    ? "linear-gradient(to right, #131b2b, #111e3b)"
                    : index === 1
                    ? "linear-gradient(to bottom, #112145, #111e3d)"
                    : "linear-gradient(to right, #111e3b, #121a2b)",
              }}
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.h2
                className="text-[16px] md:text-[24px] font-semibold text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {milestone.value}
              </motion.h2>
              <motion.p
                className="text-[#FFFFFF99] text-xs md:text-sm text-center mt-1 font-light"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {milestone.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="space-x-5 mt-11 flex justify-center"
          variants={itemVariants}
        >
          <motion.a
            href="#"
            className="bg-white text-xs md:text-base px-6 py-3 md:px-9 md:py-4 rounded-full text-[#324351] flex items-center gap-1 md:gap-2 hover:bg-gradient-to-r from-[#1488fc] to-[#042f4e] transition-all duration-300 hover:text-white"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get Started Now
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <BsArrowRight className="text-base md:text-lg" />
            </motion.div>
          </motion.a>
          <motion.a
            href="#"
            className="bg-[#303437] text-xs md:text-base px-6 py-3 md:px-9 md:py-4 rounded-full text-white hover:bg-gradient-to-r from-[#1488fc] to-[#042f4e] transition-all duration-300 hover:text-white"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            View Pricing
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
