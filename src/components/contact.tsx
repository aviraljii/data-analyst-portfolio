'use client'

import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { FormEvent, useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Let&apos;s connect and discuss how I can help with your data needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {/* Email */}
          <motion.a
            href="mailto:contact@nanshi.dev"
            variants={itemVariants}
            className="p-6 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Mail className="text-accent" size={28} />
              </div>
            </div>
            <h3 className="font-bold text-foreground mb-2">Email</h3>
            <p className="text-sm text-muted-foreground">nanshi@example.com</p>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/nancy-sharma-42a00b357/"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="p-6 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <svg className="w-7 h-7 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M19.8 19.8v-5.906c0-2.866-.613-5.079-3.975-5.079-1.614 0-2.696 1.028-3.14 2.003h-.046v-1.693h-3.186v12.675h3.313v-6.281c0-1.65.313-3.247 2.357-3.247 2.016 0 2.04 1.887 2.04 3.35v6.178h3.317zM2.468 1.75C1.1 1.75.35 2.5.35 3.5s.75 1.75 2.118 1.75c1.367 0 2.117-.75 2.117-1.75-.001-1-1.052-1.75-2.117-1.75zM.5 19.8h3.5V7.14H.5v12.66zm15.5-13.82h-.046c-1.285 0-2.12-.887-2.12-1.998 0-1.142.885-2.003 2.167-2.003 1.282 0 2.12.86 2.12 2.003 0 1.11-.838 1.998-2.12 1.998z" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-foreground mb-2">LinkedIn</h3>
            <p className="text-sm text-muted-foreground">Connect with me</p>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/Nancysharma-09"
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            className="p-6 bg-card border border-border rounded-xl hover:border-accent hover:shadow-lg transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-accent/10 rounded-lg">
                <svg className="w-7 h-7 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.19 20 14.44 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <h3 className="font-bold text-foreground mb-2">GitHub</h3>
            <p className="text-sm text-muted-foreground">View my projects</p>
          </motion.a>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto p-8 bg-secondary/50 border border-border rounded-2xl space-y-6"
        >
          <motion.div variants={itemVariants} className="space-y-2">
            <label htmlFor="name" className="block text-sm font-semibold text-foreground">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="Your name"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-foreground">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
              placeholder="your@email.com"
              required
            />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-2">
            <label htmlFor="message" className="block text-sm font-semibold text-foreground">
              Message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={5}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Your message..."
              required
            />
          </motion.div>

          <motion.button
            variants={itemVariants}
            type="submit"
            className="w-full py-3 bg-accent text-accent-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            {isSubmitted ? 'Message Sent!' : 'Send Message'} <Send size={18} />
          </motion.button>

          {isSubmitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-accent text-sm font-semibold"
            >
              ✓ Thank you! I&apos;ll get back to you soon.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  )
}
