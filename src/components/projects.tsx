'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: 'Customer Shopping Behavior Analysis',
    description:
      'Comprehensive analysis of customer shopping patterns and preferences using SQL and Python. Generated actionable insights for marketing optimization.',
    technologies: ['SQL', 'Python', 'Pandas', 'Power BI'],
    features: [
      'Customer segmentation analysis',
      'Purchase pattern identification',
      'Behavioral metrics dashboard',
      'Predictive insights',
    ],
    imageUrl: '/placeholder.svg?height=300&width=500',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Blinkit Real-Time Sales Dashboard',
    description:
      'Real-time sales monitoring dashboard for Blinkit logistics. Provides instant visibility into delivery metrics, order status, and performance KPIs.',
    technologies: ['Power BI', 'SQL', 'DAX', 'MySQL'],
    features: [
      'Real-time sales tracking',
      'Delivery performance metrics',
      'Regional performance analysis',
      'Executive summary view',
    ],
    imageUrl: '/placeholder.svg?height=300&width=500',
    demoUrl: '#',
    githubUrl: '#',
  },
]

export function Projects() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Showcase of impactful data analysis and BI solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-accent hover:shadow-xl transition-all duration-300"
            >
              {/* Project image */}
              <div className="relative h-48 bg-secondary overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-foreground/80 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2 pt-2">
                  {project.features.map((feature, idx) => (
                    <p
                      key={idx}
                      className="text-sm text-foreground/70 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </p>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <Link href={project.demoUrl} className="flex-1">
                    <button className="w-full py-2 bg-accent text-accent-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 hover:scale-105">
                      Live Demo <ExternalLink size={16} />
                    </button>
                  </Link>
                  <Link href={project.githubUrl} className="flex-1">
                    <button className="w-full py-2 border border-foreground/20 text-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-secondary transition-all duration-300">
                      GitHub 
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.19 20 14.44 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
