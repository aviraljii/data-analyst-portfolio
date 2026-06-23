'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: 'Email',
      url: 'mailto:nanshi@example.com',
      icon: Mail,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nancy-sharma-42a00b357/',
      icon: null,
    },
    {
      name: 'GitHub',
      url: 'https://github.com/Nancysharma-09',
      icon: null,
    },
  ]

  return (
    <footer className="bg-secondary/70 text-foreground py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold">Nanshi Sharma</h3>
            <p className="text-foreground/80">
              Data Analyst | Business Intelligence Specialist
            </p>
            <p className="text-sm text-muted-foreground">
              Transforming data into actionable insights for business growth.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-foreground/80">
              <li>
                <Link href="#about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#skills" className="hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="font-semibold text-lg">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon

                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 flex items-center justify-center"
                    aria-label={link.name}
                  >
                    {link.name === 'GitHub' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.19 20 14.44 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    ) : link.name === 'LinkedIn' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M19.8 19.8v-5.906c0-2.866-.613-5.079-3.975-5.079-1.614 0-2.696 1.028-3.14 2.003h-.046v-1.693h-3.186v12.675h3.313v-6.281c0-1.65.313-3.247 2.357-3.247 2.016 0 2.04 1.887 2.04 3.35v6.178h3.317zM2.468 1.75C1.1 1.75.35 2.5.35 3.5s.75 1.75 2.118 1.75c1.367 0 2.117-.75 2.117-1.75-.001-1-1.052-1.75-2.117-1.75zM.5 19.8h3.5V7.14H.5v12.66zm15.5-13.82h-.046c-1.285 0-2.12-.887-2.12-1.998 0-1.142.885-2.003 2.167-2.003 1.282 0 2.12.86 2.12 2.003 0 1.11-.838 1.998-2.12 1.998z" />
                      </svg>
                    ) : Icon ? (
                      <Icon size={20} />
                    ) : null}
                  </a>
                )
              })}
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="h-px bg-border my-8" />

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-4"
        >
          <p>&copy; {currentYear} Nanshi Sharma. All rights reserved.</p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Back to Top
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  )
}
