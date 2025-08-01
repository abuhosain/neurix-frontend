"use client"

import { BsArrowRight } from "react-icons/bs"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"
import startup from "../..//public/assets/why-neurix/startup-logo-min.jpg"
import nike from "../..//public/assets/why-neurix/nike.png"

export default function WhyNeurix() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const phrases = ["Growing Business", "Startups", "D2C Brands"]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [phrases.length])

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

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.section
      className="text-white w-11/12 md:w-10/12 mx-auto pt-16 md:pt-20 pb-5 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="w-full lg:w-1/2" variants={itemVariants}>
        <motion.h4 className="text-[#D0D5DD] text-base md:text-lg lg:text-xl mb-2 md:mb-4 font-semibold" variants={itemVariants}>
          Why Neurix?
        </motion.h4>

        <motion.div className="mb-4 md:mb-6" variants={itemVariants}>
          <div className="flex items-start gap-2 md:gap-3">
            <h1 className="text-xl md:text-2xl lg:text-[40px] leading-tight">Trusted by</h1>
            <div className="relative flex flex-col items-start h-16 -mt-6 lg:-mt-12 mb-6 md:h-20 lg:h-24">
              {[0, 1, 2].map((position) => {
                // Calculate which phrase should be in this position
                const phraseIndex = (currentIndex + position) % phrases.length
                const phrase = phrases[phraseIndex]
                const isMiddle = position === 1 // Middle position is always highlighted

                return (
                  <motion.span
                    key={`${phrase}-${position}`}
                    animate={{
                      opacity: isMiddle ? 1 : 0.3,
                      scale: isMiddle ? 1 : 0.85,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                    className={`whitespace-nowrap text-xl md:text-2xl lg:text-[40px] font-medium leading-tight ${
                      isMiddle
                        ? "bg-gradient-to-r from-[#1488fc] to-[#042f4e] bg-clip-text text-transparent"
                        : "text-[#666666]"
                    }`}
                    style={{
                      position: position === 0 ? "relative" : "absolute",
                      top: position === 0 ? 0 : `${position * 1.2}em`,
                    }}
                  >
                    {phrase}
                  </motion.span>
                )
              })}
            </div>
          </div>
        </motion.div>

        <motion.p
          className="text-[#FFFFFFB3] text-base md:text-lg lg:text-xl mb-6 lg:mb-10 leading-relaxed"
          variants={itemVariants}
        >
          We combine fast, reliable, and secure service so you can focus on growing your business—without any hassles.
        </motion.p>

        <motion.ul className="space-y-3 md:space-y-4 mb-8 md:mb-10" variants={containerVariants}>
          {["Reliable Service", "Easy Management", "Fast Setup", "Transparent Pricing"].map((item, index) => (
            <motion.li
              key={item}
              className="flex items-center gap-2 md:gap-3 text-[#FFFFFFCC] text-sm md:text-base lg:text-lg"
              variants={listItemVariants}
              whileHover={{ x: 5, transition: { duration: 0.2 } }}
            >
              <Image
                src={nike || "/placeholder.svg"}
                alt="Check icon"
                width={20}
                height={20}
                className="h-4 w-4 md:h-5 md:w-5 flex-shrink-0"
              />
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.a
          href="#"
          className="bg-white text-xs md:text-sm lg:text-base px-4 py-2.5 md:px-6 md:py-3 lg:px-9 lg:py-4 rounded-full text-[#324351] flex items-center justify-center gap-1 md:gap-2 w-full max-w-[200px] md:max-w-[240px] lg:max-w-[280px] hover:bg-gradient-to-r from-[#1488fc] to-[#042f4e] transition-all duration-300 hover:text-white font-medium"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started Now
          <BsArrowRight className="text-sm md:text-base lg:text-lg" />
        </motion.a>
      </motion.div>

      <motion.div className="w-full lg:w-1/2 mix-blend-lighten" variants={imageVariants}>
        <Image
          src={startup || "/placeholder.svg"}
          alt="Startup illustration"
          width={800}
          height={600}
          className="w-full h-auto object-contain"
          priority
        />
      </motion.div>
    </motion.section>
  )
}
