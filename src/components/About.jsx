import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

const features = [
  {
    icon: <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
    title: 'Jungle-Chic Design',
    desc: 'Lush greenery, hanging plants, rattan lamps, and natural stone interiors',
  },
  {
    icon: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
    title: 'Open Till Midnight',
    desc: 'From early morning coffee to late-night desserts, daily 7 AM – 12 AM',
  },
  {
    icon: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></>,
    title: 'Community Hub',
    desc: 'Chess sets, vinyl records, pop-up events, and the best sunset views',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream-100 dark:bg-sage-900 overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <motion.div {...fadeIn} className="relative max-w-[500px] mx-auto lg:mx-0">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/5]">
              <img src={`${import.meta.env.BASE_URL}images/entrance-sign.png`} alt="The Bench entrance with signature branding and vintage gramophone" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 w-[55%] rounded-xl overflow-hidden shadow-2xl border-4 border-cream-100 dark:border-sage-900 aspect-[4/5]">
              <img src={`${import.meta.env.BASE_URL}images/interior-lounge.png`} alt="The Bench indoor lounge with modern furniture" className="w-full h-full object-cover" />
            </div>
            {/* Rating badge */}
            <div className="absolute top-5 -right-2 bg-white dark:bg-sage-800 px-5 py-4 rounded-xl shadow-lg text-center z-10">
              <span className="block font-display text-3xl font-semibold text-sage-900 dark:text-cream-50 leading-none">4.8</span>
              <span className="text-gold-400 text-sm tracking-wider">★★★★★</span>
              <span className="block text-[0.7rem] text-sage-500/60 dark:text-cream-400/50 mt-0.5">~4,000 reviews</span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.15 }}>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-normal leading-[1.15] text-sage-900 dark:text-cream-50 mb-4">
              A Botanical Escape<br />in the Heart of Abu Dhabi
            </h2>
            <p className="text-[1.05rem] text-sage-600 dark:text-cream-400/70 leading-relaxed mb-9">
              The Bench is more than a café — it's a living, breathing garden where specialty coffee meets jungle-chic design. Nestled at Al Raha Beach, our space is a curated escape from the city's pace.
            </p>

            <div className="flex flex-col gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-sage-500/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-sage-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{f.icon}</svg>
                  </div>
                  <div>
                    <h4 className="text-[0.95rem] font-semibold text-sage-900 dark:text-cream-100 mb-1">{f.title}</h4>
                    <p className="text-sm text-sage-500/70 dark:text-cream-400/50 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
