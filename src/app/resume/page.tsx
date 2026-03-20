'use client';

import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="min-h-screen max-w-2xl mx-auto py-24"
    >
      {/* Header */}
      <div className="px-4">
        <div className="flex flex-col gap-2 tracking-tight">
          <motion.h1
            variants={item}
            className="text-3xl text-foreground"
          >
            Resume
          </motion.h1>

          <motion.p
            variants={item}
            className="text-muted-foreground font-medium"
          >
            View and download my professional resume.
          </motion.p>
        </div>
      </div>

      {/* Divider */}
      <motion.div
        variants={item}
        className="mt-6 border-t border-border"
      />

      {/* PDF Viewer */}
      <motion.div
        variants={item}
        className="mt-6 px-4 w-full"
      >
        <iframe
          src="https://drive.google.com/file/d/1cwr6LhiYNLkMPAFEB6vAHincvSXVNu9c/preview"
          className="w-full h-[600px] rounded-md border"
          allow="autoplay"
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
};

export default Resume;