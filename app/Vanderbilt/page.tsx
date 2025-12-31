"use client";

import RotatingEarth from "../components/globe/globe";
import { motion } from "framer-motion";
import { Mail, Globe, Building2, Scale, Shield, Landmark, Users } from "lucide-react";

export default function VanderbiltPage() {
  const services = [
    {
      icon: Globe,
      title: "Geopolitical Investment Advisory",
      description: "Legal and strategic guidance on cross-border investments in Africa, the Caribbean, Europe, and the Middle East. Project finance structuring, M&A, infrastructure development, and export credit financing expertise.",
    },
    {
      icon: Building2,
      title: "Corporate Transactional Advice",
      description: "Renowned energy development and finance transaction advisors with decades of experience in large-scale infrastructure, hydrocarbons, mining ventures, and public-private partnerships.",
    },
    {
      icon: Shield,
      title: "Sovereign & Institutional Counsel",
      description: "Strategic counsel to governments, development institutions, and multilateral organizations. Support in negotiating bilateral and multilateral agreements.",
    },
    {
      icon: Scale,
      title: "Policy Advocacy & Diplomacy",
      description: "Design and execution of advocacy campaigns for market access. High-level diplomatic interfacing and convening stakeholder dialogues and investment forums.",
    },
    {
      icon: Landmark,
      title: "U.S. Government Relations",
      description: "Advisory on relationships with U.S. institutions including EXIM, DFC, and Commerce. Navigation of trade finance programs and government contracting.",
    },
    {
      icon: Users,
      title: "State & Local Government",
      description: "Proven track record working with U.S. Governors, Mayors, and legislators. Helping companies leverage subnational engagement for global growth.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-[#f30126] relative overflow-hidden">
      {/* Background elements */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #fff 1px, transparent 1px),
            linear-gradient(to bottom, #fff 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      <div className="absolute top-0 left-0 w-full h-1/2 bg-linear-to-b from-black/10 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 tracking-tight leading-tight">
            Vanderbilt Global<br className="hidden sm:block" /> Strategy Group
          </h1>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-white/85 font-light leading-relaxed px-4">
            A strategic portfolio of services for clients seeking geopolitical insight, counsel, and access across borders.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-16"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, scale: 1.01 }}
                className="group bg-white/10 backdrop-blur-sm border border-white/15 p-6 sm:p-7 rounded-2xl shadow-lg hover:bg-white/15 hover:border-white/25 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#d4af37]/20 flex items-center justify-center mb-5 group-hover:bg-[#d4af37]/30 transition-colors">
                  <IconComponent className="w-6 h-6 text-[#d4af37]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-serif mb-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-white/75 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Card - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 mb-16"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
            <div className="w-16 h-16 rounded-2xl bg-[#f30126]/10 flex items-center justify-center shrink-0">
              <Mail className="w-8 h-8 text-[#f30126]" />
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900 mb-2">
                Get in Touch
              </h3>
              <a 
                href="mailto:info@vanderbiltglobalstrategy.com"
                className="text-lg sm:text-xl text-[#f30126] hover:text-[#c00120] transition-colors font-medium"
              >
                info@vanderbiltglobalstrategy.com
              </a>
              <p className="text-gray-600 mt-3 max-w-md">
                Connect with our team to discuss how we can support your strategic objectives.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Globe Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
            <div className="absolute inset-0 bg-linear-to-t from-[#f30126] via-transparent to-transparent pointer-events-none z-10" />
            <RotatingEarth width={600} height={600} className="opacity-80" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
