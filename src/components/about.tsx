'use client'

import { motion } from 'framer-motion'

const skills = [
  'Data Analysis',
  'SQL',
  'Python',
  'Power BI',
  'Dashboard Development',
  'KPI Reporting',
  'Business Intelligence',
]

export function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
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
            About
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional introduction highlighting expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-foreground/90 leading-relaxed">
              I&apos;m a dedicated Data Analyst with a passion for transforming complex datasets into
              meaningful insights that drive business decisions. With expertise in SQL, Python, and
              Power BI, I specialize in creating comprehensive dashboards and analytical solutions
              that empower organizations to leverage their data effectively.
            </p>
            <p className="text-foreground/90 leading-relaxed">
              My approach combines technical proficiency with a deep understanding of business needs,
              ensuring that every analysis translates into actionable intelligence for stakeholders.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Core Expertise</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="px-4 py-3 bg-card border border-border rounded-lg hover:border-accent transition-all duration-300 hover:shadow-md"
                >
                  <p className="text-sm font-medium text-foreground">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
