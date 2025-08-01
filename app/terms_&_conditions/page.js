"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("")

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const sidebarVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const sections = [
    { id: "introduction", title: "Introduction", icon: "📋" },
    { id: "acceptance", title: "Acceptance of Terms", icon: "✅" },
    { id: "services", title: "Description of Services", icon: "🌐" },
    { id: "user-accounts", title: "User Accounts", icon: "👤" },
    { id: "payment", title: "Payment Terms", icon: "💳" },
    { id: "privacy", title: "Privacy Policy", icon: "🔒" },
    { id: "prohibited", title: "Prohibited Uses", icon: "🚫" },
    { id: "termination", title: "Termination", icon: "⚠️" },
    { id: "liability", title: "Limitation of Liability", icon: "⚖️" },
    { id: "changes", title: "Changes to Terms", icon: "📝" },
    { id: "contact", title: "Contact Information", icon: "📞" },
  ]

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <main className="bg-[#0a0b0d]">
      {/* Header Section */}
      <div
        className="bg-cover bg-bottom lg:bg-right bg-no-repeat pb-16 md:pb-26"
        style={{ backgroundImage: "url('/light-bg.jpg')" }}
      >
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="min-h-screen text-white">
        <motion.div
          className="w-full md:w-10/12 mx-auto px-4 md:px-6 py-8 md:py-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div className="text-center mb-12 md:mb-16" variants={itemVariants}>
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-[#1488fc] to-[#042f4e] bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Terms and Conditions
            </motion.h1>
            <motion.p className="text-[#FFFFFFB3] text-base md:text-lg max-w-3xl mx-auto" variants={itemVariants}>
              Please read these Terms and Conditions carefully before using our services. By accessing or using Neurix,
              you agree to be bound by these terms.
            </motion.p>
            <motion.div
              className="text-sm text-[#99AAB6] mt-4 flex items-center justify-center gap-2"
              variants={itemVariants}
            >
              <span>Last updated: January 2025</span>
              <span className="w-1 h-1 bg-[#99AAB6] rounded-full"></span>
              <span>Effective Date: January 1, 2025</span>
            </motion.div>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Sidebar Navigation */}
            <motion.div
              className="lg:w-1/4 lg:sticky lg:top-8 lg:self-start"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
            >
              <div
                className="bg-gradient-to-b from-[#0c0d12] to-[#151619] border border-gray-800 rounded-xl p-4 md:p-6"
                style={{
                  background: "linear-gradient(to bottom, #0c0d12, #151619)",
                }}
              >
                <h3 className="text-lg font-semibold mb-4 text-[#F2F4F7]">Table of Contents</h3>
                <nav className="space-y-2">
                  {sections.map((section, index) => (
                    <motion.button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left p-2 rounded-lg transition-all duration-200 flex items-center gap-3 text-sm ${
                        activeSection === section.id
                          ? "bg-gradient-to-r from-[#1488fc] to-[#042f4e] text-white"
                          : "text-[#99AAB6] hover:text-white hover:bg-[#1a1d21]"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-base">{section.icon}</span>
                      <span>{section.title}</span>
                    </motion.button>
                  ))}
                </nav>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div className="lg:w-3/4" variants={itemVariants}>
              <div className="space-y-8 md:space-y-12">
                {/* Introduction */}
                <motion.section id="introduction" className="scroll-mt-8" variants={itemVariants}>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#F2F4F7] flex items-center gap-3">
                    <span className="text-2xl">📋</span>
                    Introduction
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-[#FFFFFFB3] leading-relaxed mb-4">
                      Welcome to Neurix, a cloud platform designed for ambitious eCommerce brands and SaaS startups.
                      These Terms and Conditions (&quot;Terms&quot;) govern your use of our website, services, and products
                      provided by Nextup Global Ltd.
                    </p>
                    <p className="text-[#FFFFFFB3] leading-relaxed">
                      By accessing or using our services, you acknowledge that you have read, understood, and agree to
                      be bound by these Terms and our Privacy Policy.
                    </p>
                  </div>
                </motion.section>

                {/* Acceptance of Terms */}
                <motion.section id="acceptance" className="scroll-mt-8" variants={itemVariants}>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#F2F4F7] flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    Acceptance of Terms
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-[#FFFFFFB3] leading-relaxed mb-4">
                      By creating an account, making a purchase, or using any of our services, you confirm that:
                    </p>
                    <ul className="text-[#FFFFFFB3] leading-relaxed space-y-2 ml-6">
                      <li>• You are at least 18 years old or have parental consent</li>
                      <li>• You have the legal capacity to enter into these Terms</li>
                      <li>• You will comply with all applicable laws and regulations</li>
                      <li>• All information provided is accurate and up-to-date</li>
                    </ul>
                  </div>
                </motion.section>

                {/* Description of Services */}
                <motion.section id="services" className="scroll-mt-8" variants={itemVariants}>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#F2F4F7] flex items-center gap-3">
                    <span className="text-2xl">🌐</span>
                    Description of Services
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-[#FFFFFFB3] leading-relaxed mb-4">Neurix provides the following services:</p>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-[#0c0d12] border border-gray-800 rounded-lg p-4">
                        <h4 className="text-[#F2F4F7] font-semibold mb-2">Domain Services</h4>
                        <p className="text-[#99AAB6] text-sm">
                          Domain registration, management, and DNS configuration services.
                        </p>
                      </div>
                      <div className="bg-[#0c0d12] border border-gray-800 rounded-lg p-4">
                        <h4 className="text-[#F2F4F7] font-semibold mb-2">Cloud Services</h4>
                        <p className="text-[#99AAB6] text-sm">
                          Scalable cloud hosting and infrastructure solutions (coming soon).
                        </p>
                      </div>
                    </div>
                    <p className="text-[#FFFFFFB3] leading-relaxed">
                      We reserve the right to modify, suspend, or discontinue any service at any time with reasonable
                      notice to users.
                    </p>
                  </div>
                </motion.section>

                {/* User Accounts */}
                <motion.section id="user-accounts" className="scroll-mt-8" variants={itemVariants}>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#F2F4F7] flex items-center gap-3">
                    <span className="text-2xl">👤</span>
                    User Accounts
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-[#FFFFFFB3] leading-relaxed mb-4">
                      To access certain features, you must create an account. You are responsible for:
                    </p>
                    <ul className="text-[#FFFFFFB3] leading-relaxed space-y-2 ml-6 mb-4">
                      <li>• Maintaining the confidentiality of your account credentials</li>
                      <li>• All activities that occur under your account</li>
                      <li>• Notifying us immediately of any unauthorized access</li>
                      <li>• Providing accurate and complete information</li>
                    </ul>
                    <div className="bg-[#1a2332] border border-[#1488fc] rounded-lg p-4">
                      <p className="text-[#1488fc] text-sm font-medium">
                        💡 Security Tip: Use a strong, unique password and enable two-factor authentication when
                        available.
                      </p>
                    </div>
                  </div>
                </motion.section>

                {/* Payment Terms */}
                <motion.section id="payment" className="scroll-mt-8" variants={itemVariants}>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#F2F4F7] flex items-center gap-3">
                    <span className="text-2xl">💳</span>
                    Payment Terms
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-[#FFFFFFB3] leading-relaxed mb-4">
                      Our payment terms are designed to be transparent and fair:
                    </p>
                    <div className="space-y-4">
                      <div className="bg-[#0c0d12] border border-gray-800 rounded-lg p-4">
                        <h4 className="text-[#F2F4F7] font-semibold mb-2">Pricing</h4>
                        <p className="text-[#99AAB6] text-sm">
                          All prices are clearly displayed and include applicable taxes. No hidden fees.
                        </p>
                      </div>
                      <div className="bg-[#0c0d12] border border-gray-800 rounded-lg p-4">
                        <h4 className="text-[#F2F4F7] font-semibold mb-2">Billing</h4>
                        <p className="text-[#99AAB6] text-sm">
                          Services are billed in advance. Automatic renewal applies unless cancelled.
                        </p>
                      </div>
                      <div className="bg-[#0c0d12] border border-gray-800 rounded-lg p-4">
                        <h4 className="text-[#F2F4F7] font-semibold mb-2">Refunds</h4>
                        <p className="text-[#99AAB6] text-sm">
                          30-day money-back guarantee on hosting plans. Domain registrations are non-refundable.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.section>

                {/* Privacy Policy */}
                <motion.section id="privacy" className="scroll-mt-8" variants={itemVariants}>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#F2F4F7] flex items-center gap-3">
                    <span className="text-2xl">🔒</span>
                    Privacy Policy
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-[#FFFFFFB3] leading-relaxed mb-4">
                      Your privacy is important to us. We collect and use your information in accordance with our
                      Privacy Policy, which includes:
                    </p>
                    <ul className="text-[#FFFFFFB3] leading-relaxed space-y-2 ml-6">
                      <li>• What information we collect and why</li>
                      <li>• How we use and protect your data</li>
                      <li>• Your rights regarding your personal information</li>
                      <li>• How to contact us about privacy concerns</li>
                    </ul>
                  </div>
                </motion.section>

                {/* Prohibited Uses */}
                <motion.section id="prohibited" className="scroll-mt-8" variants={itemVariants}>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#F2F4F7] flex items-center gap-3">
                    <span className="text-2xl">🚫</span>
                    Prohibited Uses
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-[#FFFFFFB3] leading-relaxed mb-4">
                      You may not use our services for any illegal or unauthorized purpose, including but not limited
                      to:
                    </p>
                    <div className="bg-[#2d1b1b] border border-red-800 rounded-lg p-4">
                      <ul className="text-[#FFFFFFB3] leading-relaxed space-y-2 ml-6">
                        <li>• Violating any laws or regulations</li>
                        <li>• Infringing on intellectual property rights</li>
                        <li>• Distributing malware or harmful content</li>
                        <li>• Engaging in fraudulent activities</li>
                        <li>• Spamming or unsolicited communications</li>
                        <li>• Attempting to gain unauthorized access to systems</li>
                      </ul>
                    </div>
                  </div>
                </motion.section>

                {/* Contact Information */}
                <motion.section id="contact" className="scroll-mt-8" variants={itemVariants}>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#F2F4F7] flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    Contact Information
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-[#FFFFFFB3] leading-relaxed mb-6">
                      If you have any questions about these Terms and Conditions, please contact us:
                    </p>
                    <div className="bg-gradient-to-r from-[#0c0d12] to-[#151619] border border-gray-800 rounded-xl p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-[#F2F4F7] font-semibold mb-3">Company Information</h4>
                          <div className="space-y-2 text-[#99AAB6] text-sm">
                            <p>Nextup Global Ltd</p>
                            <p>40 Penarth Road</p>
                            <p>Cardiff, Wales, CF10 5GP</p>
                            <p>United Kingdom</p>
                            <p>Company Number: 15189998</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="text-[#F2F4F7] font-semibold mb-3">Get in Touch</h4>
                          <div className="space-y-3">
                            <motion.a
                              href="#"
                              className="bg-[#FFFFFF29] text-white text-sm px-4 py-2 rounded-full flex items-center gap-2 w-fit hover:bg-gradient-to-r from-[#1488fc] to-[#042f4e] transition-all duration-300"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              💬 Chat with Support
                            </motion.a>
                            <p className="text-[#99AAB6] text-sm">
                              Available 24/7 for all your questions and concerns.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.section>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  )
}
