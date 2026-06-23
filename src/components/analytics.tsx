'use client'

import { motion } from 'framer-motion'
import { LineChart, BarChart3, PieChart, TrendingUp } from 'lucide-react'

const dashboards = [
  {
    title: 'Sales Dashboard',
    description: 'Real-time sales tracking and revenue metrics',
    icon: BarChart3,
    metrics: ['Total Sales', 'Revenue', 'Growth Rate', 'Market Share'],
  },
  {
    title: 'Customer Insights Dashboard',
    description: 'Deep dive into customer behavior and demographics',
    icon: PieChart,
    metrics: ['Customer Count', 'Retention Rate', 'Lifetime Value', 'Churn Rate'],
  },
  {
    title: 'KPI Dashboard',
    description: 'Key performance indicators for executive monitoring',
    icon: TrendingUp,
    metrics: ['Performance', 'Targets', 'Benchmarks', 'Alerts'],
  },
  {
    title: 'Business Performance',
    description: 'Comprehensive business analytics and reporting',
    icon: LineChart,
    metrics: ['Efficiency', 'Productivity', 'Quality', 'Cost Analysis'],
  },
]

export function Analytics() {
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
    <section id="analytics" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
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
            Dashboard Showcase
          </h2>
          <p className="text-muted-foreground text-lg">
            Sample analytics dashboards demonstrating BI expertise
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {dashboards.map((dashboard, index) => {
            const Icon = dashboard.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 bg-card border border-border rounded-xl hover:border-accent hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                      {dashboard.title}
                    </h3>
                    <p className="text-foreground/70 text-sm">{dashboard.description}</p>
                  </div>
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-all duration-300">
                    <Icon className="text-accent" size={28} />
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="mb-6 h-40 bg-secondary rounded-lg flex items-center justify-center border border-border/50 group-hover:border-accent/30 transition-all duration-300">
                  <div className="text-center">
                    <Icon className="text-muted-foreground/40 mx-auto mb-2" size={40} />
                    <p className="text-sm text-muted-foreground/60">
                      Interactive chart preview
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3">
                  {dashboard.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2 bg-secondary rounded-lg border border-border/50 group-hover:border-accent/30 transition-all duration-300"
                    >
                      <p className="text-xs text-muted-foreground">{metric}</p>
                      <p className="text-lg font-bold text-foreground">--</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
