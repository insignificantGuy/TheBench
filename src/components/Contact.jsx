import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

const contactLinks = [
  { icon: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />, text: '+971 2 642 XXXX', href: 'tel:+97126420000' },
  { icon: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></>, text: 'hello@thebench.ae', href: 'mailto:hello@thebench.ae' },
  { icon: <><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></>, text: '@thebench.ad', href: 'https://instagram.com/thebench.ad', external: true },
  { icon: <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.555 4.121 1.523 5.855L.065 23.577l5.883-1.528A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm5.894 17.073c-.247.694-1.449 1.326-2.012 1.412-.516.08-1.17.113-1.888-.119a17.15 17.15 0 01-1.709-.632c-3.007-1.297-4.97-4.337-5.12-4.536-.15-.2-1.224-1.628-1.224-3.104 0-1.476.774-2.202 1.05-2.502.274-.3.6-.374.8-.374.2 0 .398 0 .573.01.184.01.432-.07.675.515.247.6.844 2.06.918 2.21.075.15.125.324.025.524-.1.2-.15.324-.3.498-.15.175-.314.39-.449.524-.15.15-.306.312-.131.612.175.3.776 1.28 1.666 2.074 1.144 1.02 2.109 1.336 2.409 1.486.3.15.474.125.649-.075.175-.2.749-.874.949-1.174.2-.3.4-.25.674-.15.275.1 1.726.814 2.026.964.3.15.498.225.573.349.075.125.075.724-.172 1.418z" />, text: 'WhatsApp', href: 'https://wa.me/97126420000', external: true, fill: true },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    e.target.reset()
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream-50 dark:bg-sage-950">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Info */}
          <motion.div {...fadeIn}>
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-normal text-sage-900 dark:text-cream-50 mb-4">Let's Connect</h2>
            <p className="text-sage-600 dark:text-cream-400/70 text-[1.02rem] mb-8">Whether it's a reservation, an event inquiry, or just to say hello — we'd love to hear from you.</p>

            <div className="flex flex-col gap-3">
              {contactLinks.map((l, i) => (
                <a
                  key={i}
                  href={l.href}
                  target={l.external ? '_blank' : undefined}
                  rel={l.external ? 'noopener' : undefined}
                  className="flex items-center gap-3.5 px-4 py-3 rounded-xl text-sage-600 dark:text-cream-400/70 hover:bg-sage-500/[0.06] hover:text-sage-500 transition-all"
                >
                  <svg className="w-5 h-5 shrink-0 text-sage-500" viewBox="0 0 24 24" fill={l.fill ? 'currentColor' : 'none'} stroke={l.fill ? 'none' : 'currentColor'} strokeWidth="1.5">{l.icon}</svg>
                  <span className="text-[0.95rem]">{l.text}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.15 }}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-sage-800 border border-cream-200 dark:border-sage-700 rounded-2xl p-8 shadow-sm">
              <div className="flex flex-col gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-sage-900 dark:text-cream-100 mb-2 tracking-wide">Name</label>
                  <input type="text" id="name" required placeholder="Your name"
                    className="w-full px-4 py-3.5 rounded-xl border-[1.5px] border-cream-300 dark:border-sage-700 bg-cream-50 dark:bg-sage-900 text-sage-900 dark:text-cream-100 placeholder:text-sage-400/50 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/10 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-sage-900 dark:text-cream-100 mb-2 tracking-wide">Email</label>
                  <input type="email" id="email" required placeholder="your@email.com"
                    className="w-full px-4 py-3.5 rounded-xl border-[1.5px] border-cream-300 dark:border-sage-700 bg-cream-50 dark:bg-sage-900 text-sage-900 dark:text-cream-100 placeholder:text-sage-400/50 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/10 outline-none transition-all text-sm" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-sage-900 dark:text-cream-100 mb-2 tracking-wide">Message</label>
                  <textarea id="message" required placeholder="How can we help?" rows={5}
                    className="w-full px-4 py-3.5 rounded-xl border-[1.5px] border-cream-300 dark:border-sage-700 bg-cream-50 dark:bg-sage-900 text-sage-900 dark:text-cream-100 placeholder:text-sage-400/50 focus:border-sage-500 focus:ring-2 focus:ring-sage-500/10 outline-none transition-all text-sm resize-y min-h-[120px]" />
                </div>
                <button
                  type="submit"
                  className={`w-full py-3.5 rounded-full text-sm font-medium transition-all ${
                    submitted
                      ? 'bg-sage-700 text-white'
                      : 'bg-sage-500 text-white hover:bg-sage-700 hover:-translate-y-0.5 hover:shadow-md'
                  }`}
                  disabled={submitted}
                >
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
