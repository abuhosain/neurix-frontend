"use client"

import { motion } from "framer-motion"

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const numberVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const steps = [
    {
      number: 1,
      title: "Search Your Domain",
      description:
        "Enter your desired domain name in our search tool to check real-time availability across popular extensions like .com, .net, .org, and more.",
    },
    {
      number: 2,
      title: "Register Instantly",
      description:
        "Once you find the perfect name, complete your registration in minutes with transparent pricing and no hidden fees.",
    },
    {
      number: 3,
      title: "Manage & Launch",
      description:
        "Use our intuitive dashboard to manage DNS, set up forwarding, enable WHOIS protection, or connect to your hosting—anytime, anywhere.",
    },
  ]

  return (
    <motion.section
      className="w-10/12 mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="text-center pb-20 md:pb-28 lg:pb-36 p-1.5" variants={itemVariants}>
        <motion.h4 className="text-[#D0D5DD] text-lg md:text-xl font-semibold mb-2 md:mb-4" variants={itemVariants}>
          How It Works
        </motion.h4>
        <motion.h1
          className="text-white text-[30px] md:text-[38px] lg:text-[50px] leading-tight"
          variants={itemVariants}
        >
          Get Online in Just 3 Easy Steps
        </motion.h1>
      </motion.div>

      <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            className="text-center rounded-2xl px-6 md:px-8 py-8 md:py-12 mb-8 md:mb-12 relative cursor-pointer"
            style={{
              background: "linear-gradient(to top, #0d0e0f, #0c171f)",
              borderLeft: "2px solid #132129",
              borderRight: "2px solid #132129",
              borderBottom: "2px solid #132129",
              borderTop: "none",
              borderRadius: "20px",
            }}
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.div
              className="flex justify-center relative -top-20 md:-top-26 lg:-top-30"
              variants={numberVariants}
            >
              <motion.div
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-[#1488fc] to-[#042f4e] flex items-center justify-center shadow-lg"
                whileHover="hover"
              >
                <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">{step.number}</span>
              </motion.div>
            </motion.div>

            <motion.h2
              className="text-2xl md:text-3xl text-[#E2E2E2] mb-4 md:mb-5 -mt-8 md:-mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {step.title}
            </motion.h2>

            <motion.p
              className="text-base md:text-lg text-[#99AAB6] w-full md:w-5/6 mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {step.description}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
