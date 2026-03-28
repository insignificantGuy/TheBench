import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const base = import.meta.env.BASE_URL

const images = [
  { src: `${base}images/interior-tree.png`, alt: 'The Bench interior with large tree centerpiece', label: 'The Tree', span: 'row-span-2' },
  { src: `${base}images/outdoor-evening.png`, alt: 'Outdoor evening seating with colorful ceiling', label: 'Evening Ambiance' },
  { src: `${base}images/branded-latte.png`, alt: 'Latte art in The Bench branded green glass', label: 'Signature Serve' },
  { src: `${base}images/matcha-latte.png`, alt: 'Matcha latte art in grey ceramic cup', label: 'Matcha Latte' },
  { src: `${base}images/french-toast.png`, alt: 'French toast with berries and ice cream', label: 'French Toast', span: 'col-span-2' },
  { src: `${base}images/dessert-branded.png`, alt: 'Branded glass dessert on green plate', label: 'Sweet Endings' },
  { src: `${base}images/green-curtains.png`, alt: 'Green curtain display with brand signage', label: 'The Vibe', span: 'row-span-2' },
  { src: `${base}images/interior-lounge.png`, alt: 'The Bench indoor lounge seating area', label: 'The Lounge', span: 'row-span-2' },
  { src: `${base}images/latte-art.png`, alt: 'Beautiful latte art in ceramic cup', label: 'Latte Art' },
  { src: `${base}images/eggs-benedict.png`, alt: 'Eggs benedict brunch plate', label: 'Eggs Benedict' },
  { src: `${base}images/brunch-golden.png`, alt: 'Brunch dish with orange juice at golden hour', label: 'Golden Hour Brunch' },
  { src: `${base}images/brunch-outdoor.png`, alt: 'Brunch plate with outdoor view', label: 'Brunch Views' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream-50 dark:bg-sage-950">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <SectionLabel>The Vibe</SectionLabel>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-normal text-sage-900 dark:text-cream-50 mb-4">Step Inside</h2>
          <p className="text-sage-600/70 dark:text-cream-400/60 max-w-lg mx-auto">A visual stroll through our botanical escape</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[220px] gap-4"
        >
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={`group relative rounded-xl overflow-hidden cursor-pointer ${img.span || ''}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              <span className="absolute bottom-3 left-3 text-[0.82rem] font-medium text-white/90 bg-black/20 backdrop-blur-md px-3.5 py-1.5 rounded-full opacity-0 translate-y-1.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
                {img.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-sage-500/60 dark:text-cream-400/50 text-sm mb-4">See more on our Instagram</p>
          <a
            href="https://instagram.com/thebench.ad"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-[1.5px] border-cream-300 dark:border-sage-700 text-sage-800 dark:text-cream-200 text-sm font-medium hover:border-sage-500 hover:text-sage-500 hover:-translate-y-0.5 transition-all"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[18px] h-[18px]">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
            @thebench.ad
          </a>
        </motion.div>
      </div>
    </section>
  )
}
