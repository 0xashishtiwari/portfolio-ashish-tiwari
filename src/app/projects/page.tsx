'use client'

import { ProjectCard } from '@/components/projects/ProjectCard'
import SecureWhisperImg from '@/assets/SecureWhisper.png'
import { motion, Variants, easeOut } from 'framer-motion'
import CheckInlyImage from '@/assets/CheckInlyImage.png'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeOut,
    },
  },
}

const ProjectPage = () => {
  return (
    <motion.div
      className="max-w-2xl min-h-screen mx-auto pt-24 px-4"
      initial="hidden"
      animate="show"
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.div variants={itemVariants}>
        <h1 className="text-3xl font-semibold text-foreground">
          Projects
        </h1>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={itemVariants}
        className="text-muted-foreground mt-2"
      >
        Here are some of my recent projects. Click on any project to learn more about it.
      </motion.p>

      {/* Divider */}
      <motion.div
        variants={itemVariants}
        className="mt-4 border-t border-border"
      />

      {/* Projects Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <ProjectCard
            title="Secure Whisper"
            description="An anonymous messaging web app that allows users to share thoughts and communicate freely without identity, tracking, or social pressure, ensuring privacy and honest conversations."
            imageUrl={SecureWhisperImg}
            liveUrl="https://securewhisper.ashishx.in"
            repoUrl="https://github.com/0xashishtiwari/secure-whisper"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ProjectCard
            title="CheckInly"
            description="A modern property listing platform that lets users explore, search, and filter properties by location, price, and preferences for a smooth and efficient browsing experience."
            imageUrl={CheckInlyImage}
            liveUrl="https://checkinly.onrender.com"
            repoUrl="https://github.com/0xashishtiwari/checkinly"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectPage