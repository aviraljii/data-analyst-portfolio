'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { Download, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-50" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile image placeholder */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center border-2 border-accent/30 shadow-lg">
            <img
              src="/placeholder.svg?height=128&width=128"
              alt="Nanshi Sharma"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          Nanshi Sharma
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-muted-foreground mb-6 font-medium"
        >
          Data Analyst
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Transforming Raw Data into Actionable Business Insights
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#projects">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300 hover:scale-105">
              View Projects <ArrowRight size={18} />
            </button>
          </Link>
          <Link href="#contact">
            <button className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Get In Touch <Mail size={18} />
            </button>
          </Link>
          <button className="px-8 py-3 bg-accent/10 text-foreground rounded-lg font-semibold flex items-center gap-2 hover:bg-accent/20 transition-all duration-300">
            Download Resume <Download size={18} />
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-foreground rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-foreground rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
