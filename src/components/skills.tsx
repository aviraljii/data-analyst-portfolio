'use client'

import { motion } from 'framer-motion'
import { Database, Code, BarChart3, Sheet } from 'lucide-react'

const skillCategories = [
  {
    name: 'Languages & Databases',
    icon: Database,
    skills: ['Python', 'SQL', 'MySQL', 'Pandas', 'NumPy'],
  },
  {
    name: 'Business Intelligence',
    icon: BarChart3,
    skills: ['Power BI', 'Dashboard Development', 'KPI Reporting', 'Data Visualization'],
  },
  {
    name: 'Data Processing',
    icon: Sheet,
    skills: ['Data Cleaning', 'Data Transformation', 'EDA', 'Excel'],
  },
  {
    name: 'Tools & Platforms',
    icon: Code,
    skills: ['Git', 'GitHub', 'Jupyter Notebook'],
  },
]

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 flex items-center gap-3">
            <div className="w-1 h-12 bg-accent rounded-full" />
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive toolkit for data analysis and business intelligence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg transition-all duration-300 hover:bg-secondary/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-all duration-300">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">{category.name}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-foreground/80 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
