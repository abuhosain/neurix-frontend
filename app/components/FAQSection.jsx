"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BsPlus, BsDash, BsArrowRight } from "react-icons/bs"

const faqData = [
  {
    question: "What types of hosting do you offer?",
    answer: "We offer shared, VPS, and dedicated hosting plans tailored to your needs.",
  },
  {
    question: "Do you offer free SSL certificates?",
    answer: "Yes! All hosting plans come with free SSL certificates to keep your site secure and trusted.",
  },
  {
    question: "Can I migrate my website to Neurix?",
    answer: "We provide free website migration for all new customers.",
  },
  {
    question: "Where are your data centers located?",
    answer: "Our data centers are located worldwide for optimal performance and redundancy.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer: "Yes, we offer a 30-day money-back guarantee on all hosting plans.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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

  const faqItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const contentVariants = {
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
        ease: "easeInOut",
      },
    },
  }

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  }

  return (
    <motion.section
      className="w-10/12 mx-auto pt-16 md:pt-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <motion.div className="lg:w-[50%] mb-10 md:mb-16" variants={itemVariants}>
          <motion.h4 className="text-[#D0D5DD] text-lg md:text-xl mb-2 font-semibold" variants={itemVariants}>
            FAQ
          </motion.h4>
          <motion.h1
            className="text-white text-[30px] md:text-[38px] lg:text-[50px] mb-3 md:mb-4 leading-[115%] font-medium"
            variants={itemVariants}
          >
            Frequently Asked <br /> Questions
          </motion.h1>
          <motion.p
            className="text-[#FFFFFFB3] text-lg md:text-xl mb-6 lg:mb-10 w-11/12 md:pr-16"
            variants={itemVariants}
          >
            Whether you're launching a personal blog, scaling your startup, or running a high-traffic eCommerce
            site—Neurix has the infrastructure and support to back your vision.
          </motion.p>
          <motion.a
            href="#"
            className="bg-[#FFFFFF29] text-white text-xs md:text-base px-6 py-3 md:px-9 md:py-4 rounded-full flex items-center justify-center gap-1 md:gap-2 w-48 md:w-70 mt-10 hover:bg-gradient-to-r from-[#1488fc] to-[#042f4e] transition-all duration-300 hover:text-white"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Visit KnowledgeBase
            <BsArrowRight className="text-base md:text-lg" />
          </motion.a>
        </motion.div>

        {/* Right Section */}
        <motion.div className="text-white lg:w-[50%]" variants={containerVariants}>
          {faqData.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <motion.div
                key={index}
                className="mb-5 last:mb-0 border border-gray-900 rounded-lg overflow-hidden cursor-pointer"
                style={{
                  background: "linear-gradient(to bottom, #0c0d12, #151619)",
                }}
                variants={faqItemVariants}
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
                layout
              >
                <motion.div
                  className="flex justify-between items-center px-5 py-4"
                  onClick={() => toggleFAQ(index)}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-[#F2F4F7] text-lg md:text-xl pr-4">{item.question}</span>
                  <motion.button
                    className="text-white text-xl focus:outline-none cursor-pointer hover:bg-[#80808038] p-2 hover:rounded-full transition-colors duration-200 flex-shrink-0"
                    variants={iconVariants}
                    animate={isOpen ? "open" : "closed"}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isOpen ? <BsDash /> : <BsPlus />}
                  </motion.button>
                </motion.div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="overflow-hidden"
                    >
                      <motion.div
                        className="px-5 pb-5 text-sm md:text-lg text-[#99AAB6] md:w-5/6 pr-10"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        {item.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
