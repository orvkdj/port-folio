"use client";

import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";

const experience = [
  {
    role: "Graphic Designer",
    company: "TheConversion",
    period: "June 2024 - Dec 2024",
    type: "Internship",
    companyIcon: "mdi:pencil-ruler",
    companyColor: "from-blue-500 to-blue-600",
    description: "Made 60+ designs throughout 6 months of Internship",
    achievements: [
      "Has Worked with multiple local brands and international brand branches.",
      "Made designs in accordance to previously accepted copywriting drafts.",
      "Efficient, Detail-oriented and praised for multiple ideal designs.",
    ],
    technologies: [
      "Microsoft Office",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe After Effects",
      "Canva",
      "CorelDRAW",
      "Capcut",
    ],
  },
  {
    role: "Content Marketing",
    company: "TheConversion",
    period: "June 2024 - Dec 2024",
    type: "Internship",
    companyColor: "from-pink-500 to-pink-600",
    companyIcon: "mdi:office-building",
    description:
      "Planned multiple contents that aligns with brand guidelines and initial approach. Ranging from Feeds, Reels, to blogs.",
    achievements: [
      "Has made content plans for brands like Carlsberg, Deterjen Sayang, Wetkins, and Sociarmy.",
    ],
    technologies: [
      "Google Docs",
      "Google Spreadsheet",
      "Canva",
      "Wordpress",
      "TikTok",
      "Instagram",
    ],
  },
];

export default function ExperienceSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mb-16 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-green-500/3 to-blue-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <SectionHeader
          tagText="Internship Journey"
          tagIcon="solar:case-bold"
          heading="Experience"
          showUnderline={false}
          description="My Internship journey and the impact I&apos;ve made."
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-6 md:space-y-12 px-4 md:px-6"
        >
          {experience.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              <div className="flex flex-col sm:flex-row gap-6 md:gap-8 lg:gap-12">
                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${exp.companyColor} flex items-center justify-center shadow-xl`}
                >
                  <Icon
                    icon={exp.companyIcon}
                    className="text-white w-8 h-8 md:w-10 md:h-10"
                  />
                </motion.div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <Icon icon="solar:calendar-outline" width={16} />
                    {exp.period}
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>

                  <p className="text-xl font-semibold text-blue-600">
                    {exp.company}
                  </p>

                  <p className="text-gray-700 dark:text-gray-300">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="flex gap-2 text-gray-700 dark:text-gray-300">
                        <span className="mt-1 w-2 h-2 bg-blue-500 rounded-full" />
                        {a}
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((t, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 text-sm rounded-lg bg-gray-100 dark:bg-gray-800"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {index < experience.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0, opacity: 0 }}
                  whileInView={{ scaleX: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="mt-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent origin-left"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
