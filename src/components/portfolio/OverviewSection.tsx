"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";

export default function OverviewSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const floatVariants: Variants = {
    animate: {
      y: [-15, 15, -15],
      x: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <motion.section
      id="overview"
      className="mb-16 md:mb-24 lg:mb-32 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute top-10 md:top-20 right-4 md:right-16 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-br from-blue-400/20 md:from-blue-400/30 to-purple-400/20 md:to-purple-400/30 rounded-full blur-xl md:blur-4xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="absolute bottom-8 md:bottom-16 left-4 md:left-16 w-24 md:w-40 h-24 md:h-40 bg-gradient-to-br from-green-400/15 md:from-green-400/20 to-cyan-400/15 md:to-cyan-400/20 rounded-full blur-xl md:blur-2xl"
        />
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="hidden md:block absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-br from-pink-400/25 to-orange-400/25 rounded-full blur-xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10"
      >
        <SectionHeader
          tagText="Get to know me :)"
          tagIcon="solar:user-heart-bold"
          heading="About Me"
          description="Designing Multimedia projects with passion, attention to detail, and efficiency."
          showUnderline
          centered
        />

        {/* Main Content */}
        <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start px-4">
          <motion.div variants={itemVariants} className="lg:col-span-8">
            {/* content tidak diubah */}
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-4 space-y-6 mt-6 lg:mt-0">
            {/* sidebar tidak diubah */}
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
