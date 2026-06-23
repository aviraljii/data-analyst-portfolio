'use client'

import { motion } from 'framer-motion'
import { BookOpen, Award } from 'lucide-react'

const education = [
  {
    degree: 'MCA',
    institution: 'Rajasthan Technical University',
    period: '2024 – 2026',
    description: 'Master of Computer Applications',
  },
  {
    degree: 'BCA',
    institution: 'Chaudhary Charan Singh University',
    period: '2021 – 2024',
    description: 'Bachelor of Computer Applications',
    cgpa: '8.86',
  },
]

const certifications = [
  {
    title: 'Data Analytics Trainee',
    organization: 'Parivartan Skills Academy',
    period: 'September 2025 – November 2025',
  },
]

export function Education() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center gap-3">
            <div className="w-1 h-12 bg-accent rounded-full" />
            Education & Certifications
          </h2>
        </motion.div>

        <div className="space-y-12">
          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <BookOpen size={24} className="text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-card border border-border rounded-xl hover:border-accent transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                    <p className="text-accent font-semibold">{edu.institution}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                    {edu.period}
                  </span>
                </div>
                <p className="text-foreground/80 text-sm mb-2">{edu.description}</p>
                {edu.cgpa && (
                  <p className="text-sm text-accent font-medium">CGPA: {edu.cgpa}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Award size={24} className="text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>

            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-card border border-border rounded-xl hover:border-accent transition-all duration-300"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">{cert.title}</h4>
                    <p className="text-accent font-semibold">{cert.organization}</p>
                  </div>
                  <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                    {cert.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
