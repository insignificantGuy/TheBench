import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const features = [
  { icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />, label: 'Brand Pop-Ups' },
  { icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></>, label: 'Private Gatherings' },
  { icon: <><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>, label: 'Community Events' },
  { icon: <><circle cx="12" cy="12" r="10" /><polygon points="10,8 16,12 10,16" /></>, label: 'Live Sessions' },
]

export default function Events() {
  return (
    <section id="events" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background with image overlay */}
      <div className="absolute inset-0">
        <img src="/images/outdoor-evening.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
        <div className="absolute inset-0 bg-sage-950/88" />
      </div>

      <div className="relative z-10 max-w-[680px] mx-auto px-5 md:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-sage-300 mb-4">
            <span className="w-5 h-[1.5px] bg-sage-300" />
            Events & Pop-Ups
          </span>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-normal text-cream-50 mb-4">More Than Just Coffee</h2>
          <p className="text-[1.05rem] text-cream-100/65 leading-relaxed mb-9">
            The Bench is a canvas for creativity and connection. From our signature <strong className="text-cream-50">"It Girl Pop Up"</strong> to curated community events, we're always brewing something new. Whether it's a brand collaboration, a sunset soirée, or an intimate gathering — our space transforms to match your vision.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {features.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex flex-col items-center gap-2.5 py-5 px-3 rounded-xl bg-white/5 border border-white/8 hover:bg-white/10 transition-colors"
              >
                <svg className="w-6 h-6 text-sage-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{f.icon}</svg>
                <span className="text-[0.82rem] font-medium text-cream-100/75">{f.label}</span>
              </motion.div>
            ))}
          </div>

          <a href="#contact" className="inline-flex px-8 py-3.5 rounded-full bg-cream-50 text-sage-900 text-sm font-medium hover:bg-white hover:-translate-y-0.5 hover:shadow-lg transition-all">
            Host Your Event
          </a>
        </motion.div>
      </div>
    </section>
  )
}
