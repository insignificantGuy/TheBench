import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-exterior.png"
          alt="The Bench café interior with sage green walls and chesterfield sofa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-50/70 via-cream-50/40 to-cream-50/85 dark:from-sage-950/75 dark:via-sage-950/45 dark:to-sage-950/90" />
      </div>

      {/* Floating leaf SVGs */}
      <svg className="absolute top-[-30px] left-[-30px] w-[200px] text-sage-500 opacity-15 animate-[sway_8s_ease-in-out_infinite]" viewBox="0 0 120 200" fill="currentColor">
        <path d="M60 0C30 40 0 80 10 140c10 60 50 60 50 60s40 0 50-60c10-60-20-100-50-140z" />
      </svg>
      <svg className="absolute top-[10%] right-[-20px] w-[140px] text-sage-500 opacity-10 animate-[sway_10s_ease-in-out_infinite_reverse]" viewBox="0 0 80 160" fill="currentColor">
        <path d="M40 0C20 30 0 60 5 100c5 40 35 50 35 50s30-10 35-50c5-40-15-70-35-100z" />
      </svg>

      {/* Content */}
      <div className="relative z-10 text-center px-5 pt-[72px]">
        <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sage-500/10 border border-sage-500/15 text-xs font-semibold tracking-widest uppercase text-sage-600 dark:text-sage-300 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-sage-500 animate-pulse" />
          Abu Dhabi's Botanical Café
        </motion.div>

        <motion.h1 {...fadeUp(0.15)} className="font-display font-light leading-[0.95] mb-6 tracking-tight">
          <span className="block text-[clamp(2rem,4.5vw,3.5rem)] text-sage-600 dark:text-cream-400 italic font-light">The</span>
          <span className="block text-[clamp(5rem,12vw,10rem)] text-sage-900 dark:text-cream-50 font-normal tracking-[-0.03em]">Bench</span>
        </motion.h1>

        <motion.p {...fadeUp(0.3)} className="font-display text-[clamp(1.2rem,2.5vw,1.7rem)] font-light italic text-sage-500 mb-3 tracking-wide">
          Sip. Slow Down. Stay a While.
        </motion.p>

        <motion.p {...fadeUp(0.4)} className="text-[clamp(0.9rem,1.5vw,1.05rem)] text-sage-600/70 dark:text-cream-400/60 mb-10 max-w-md mx-auto">
          Where specialty coffee meets sunset views in a jungle-chic escape
        </motion.p>

        <motion.div {...fadeUp(0.55)} className="flex gap-4 justify-center flex-wrap mb-16">
          <a href="#menu" className="px-8 py-3.5 rounded-full bg-sage-500 text-white text-sm font-medium hover:bg-sage-700 hover:-translate-y-0.5 hover:shadow-lg transition-all">
            Explore Menu
          </a>
          <a href="#locations" className="px-8 py-3.5 rounded-full border-[1.5px] border-cream-400 dark:border-sage-700 text-sage-800 dark:text-cream-200 text-sm font-medium hover:border-sage-500 hover:text-sage-500 hover:-translate-y-0.5 transition-all">
            Visit Us
          </a>
        </motion.div>

        <motion.div {...fadeUp(0.7)} className="flex flex-col items-center gap-2 text-sage-500/50 dark:text-cream-400/40 text-xs tracking-widest uppercase">
          <div className="w-px h-10 bg-gradient-to-b from-sage-500 to-transparent animate-pulse" />
          Scroll
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-[-1px] left-0 right-0 z-20 leading-[0]">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[80px]">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,120 L0,120 Z" className="fill-cream-100 dark:fill-sage-900" />
        </svg>
      </div>
    </section>
  )
}
