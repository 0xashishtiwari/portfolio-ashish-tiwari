'use client';

import Contact from '@/components/home/Contact';
import Name from '@/components/home/Name';
import SpotifyNow from '@/components/home/SpotifyNow';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const HomePage = () => {
  return (
    <motion.div
      className="bg-background min-h-screen max-w-2xl mx-auto"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={item}>
        <Name />
      </motion.div>

      <motion.div variants={item}>
        <SpotifyNow />
      </motion.div>

      <motion.div variants={item}>
        <Contact />
      </motion.div>
    </motion.div>
  );
};

export default HomePage;