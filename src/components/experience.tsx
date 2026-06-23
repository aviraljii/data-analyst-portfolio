'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const experiences = [
  {
    company: 'DQOT Solutions Pvt. Ltd.',
    role: 'Associate Data Analyst',
    period: 'Jan 2026 – Present',
    responsibilities: [
      'Analyze large datasets to identify trends and patterns affecting business performance',
      'Develop and maintain interactive Power BI dashboards for executive reporting',
      'Create SQL queries and stored procedures for data extraction and transformation',
      'Collaborate with stakeholders to define KPIs and metrics for business monitoring',
      'Perform exploratory data analysis to support business decision-making',
      'Optimize database queries for improved performance and efficiency',
    ],
  },
]

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
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
            Experience
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional journey and career milestones
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 border-l-2 border-accent/30 hover:border-accent transition-all duration-300"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-10px] top-2 w-5 h-5 bg-accent rounded-full border-4 border-background" />

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <p className="text-accent font-semibold mb-2">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-foreground/80"
                    >
                      <CheckCircle size={18} className="text-accent flex-shrink-0 mt-1" />
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
