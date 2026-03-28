import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const reviews = [
  {
    text: '"The vibe is immaculate. From the hanging plants to the golden-hour lighting, it\'s like stepping into a tropical dream. And the Spanish Latte? Absolutely addictive."',
    author: 'Sarah M.',
  },
  {
    text: '"Best brunch spot in Abu Dhabi, hands down. The Early Bird sandwich is incredible, and the staff are genuinely warm and welcoming. We come back every weekend."',
    author: 'Ahmed K.',
  },
  {
    text: '"Spectacular décor and amazing food. The outdoor seating at sunset is something else entirely. It\'s our go-to spot for slow coffee sessions and catching up."',
    author: 'Mia L.',
  },
  {
    text: '"Fast, friendly service in the most beautiful setting. The Salted Vanilla Foam Matcha is life-changing. This place is worth the drive from anywhere in Abu Dhabi."',
    author: 'Rashid A.',
  },
]

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-cream-100 dark:bg-sage-900">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <SectionLabel>What People Say</SectionLabel>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-normal text-sage-900 dark:text-cream-50 mb-5">Loved by Abu Dhabi</h2>
          <div className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-white dark:bg-sage-800 border border-cream-200 dark:border-sage-700 shadow-sm">
            <span className="font-display text-3xl font-semibold text-sage-900 dark:text-cream-50 leading-none">4.8</span>
            <span className="text-gold-400 text-lg tracking-wider">★★★★★</span>
            <span className="text-sm text-sage-500/60 dark:text-cream-400/50">Nearly 4,000 Google Reviews</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white dark:bg-sage-800 border border-cream-200 dark:border-sage-700 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="text-gold-400 text-sm tracking-wider mb-4">★★★★★</div>
              <p className="text-[0.95rem] text-sage-600 dark:text-cream-400/70 leading-relaxed italic mb-4">{r.text}</p>
              <span className="text-sm font-semibold text-sage-900 dark:text-cream-100">— {r.author}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
