"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold mb-6">About</h2>
      <div className="max-w-none">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Hello! I am Andrea Mayqa — a passionate Graphic Designer & UI/UX enthusiast
          who&apos;s dedicated to create beautiful multimedia projects that aaligns with your brand ideals!
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          Within just 6 months of experience, I&apos;ve made several projects: Designing social media feeds, e-commerce banner,
          moodboards, carrousels, posters, banners, id-cards, UI-UX projects, product and packaging design to clothing and pattern making. Video Editing,
          Marketing content writing and planning, motion graphics are like second nature to me :D
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Beyond work, I love arts and writing. I am a very fast learner, competitive and loves exploring outside
          of my comfort zone. I love studying or painting on my free time!
        </p>
      </div>
    </motion.section>
  );
} 