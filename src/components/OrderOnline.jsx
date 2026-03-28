import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

export default function OrderOnline() {
  return (
    <section id="order" className="py-24 md:py-32 bg-cream-50 dark:bg-sage-950">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-br from-sage-500/[0.06] to-terra-400/[0.04] dark:from-sage-800/40 dark:to-sage-800/20 border border-cream-200 dark:border-sage-700 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden"
        >
          <div className="max-w-lg">
            <SectionLabel>Delivery</SectionLabel>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-normal text-sage-900 dark:text-cream-50 mb-4">The Bench, at Your Door</h2>
            <p className="text-sage-600 dark:text-cream-400/70 text-[1.05rem] mb-6">Can't visit? We deliver across Abu Dhabi through your favourite platforms.</p>
            <div className="flex gap-3 flex-wrap mb-4">
              <a href="#" className="px-7 py-3 rounded-full bg-white dark:bg-sage-800 border border-cream-300 dark:border-sage-700 text-sm font-medium text-sage-800 dark:text-cream-200 hover:border-sage-500 hover:-translate-y-0.5 hover:shadow-sm transition-all">
                Order on Deliveroo
              </a>
              <a href="#" className="px-7 py-3 rounded-full bg-white dark:bg-sage-800 border border-cream-300 dark:border-sage-700 text-sm font-medium text-sage-800 dark:text-cream-200 hover:border-sage-500 hover:-translate-y-0.5 hover:shadow-sm transition-all">
                Order on Talabat
              </a>
            </div>
            <p className="text-sm text-sage-500/50 dark:text-cream-400/40">Average order: ~30 AED</p>
          </div>

          {/* Decorative circles */}
          <div className="hidden md:block shrink-0 opacity-50">
            <svg viewBox="0 0 200 200" className="w-[200px] h-[200px] animate-[spin_60s_linear_infinite]" fill="none">
              <circle cx="100" cy="100" r="80" stroke="var(--color-sage-500)" strokeWidth="1" opacity="0.2" />
              <circle cx="100" cy="100" r="60" stroke="var(--color-sage-500)" strokeWidth="1" opacity="0.15" />
              <circle cx="100" cy="100" r="40" stroke="var(--color-sage-500)" strokeWidth="1" opacity="0.1" />
              <path d="M100 20C60 60 40 90 50 130c10 40 50 50 50 50s40-10 50-50c10-40-10-70-50-110z" fill="var(--color-sage-500)" opacity="0.06" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
