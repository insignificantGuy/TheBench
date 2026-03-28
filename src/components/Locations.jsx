import { motion } from 'framer-motion'
import SectionLabel from './SectionLabel'

const fadeIn = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

const services = ['Dine-in', 'Takeaway', 'Delivery', 'Outdoor Seating', 'Free Wi-Fi', 'Card & Cash']

export default function Locations() {
  return (
    <section id="locations" className="py-24 md:py-32 bg-cream-100 dark:bg-sage-900">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <motion.div {...fadeIn} className="text-center mb-12 md:mb-16">
          <SectionLabel>Find Us</SectionLabel>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-normal text-sage-900 dark:text-cream-50 mb-4">Our Locations</h2>
          <p className="text-sage-600/70 dark:text-cream-400/60 max-w-lg mx-auto">Two beautiful spaces to enjoy The Bench experience</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-7">
          {/* Al Raha Beach */}
          <motion.div {...fadeIn} className="bg-white dark:bg-sage-800 rounded-2xl overflow-hidden border border-cream-200 dark:border-sage-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="p-7 pb-5 bg-gradient-to-br from-sage-500/5 to-sage-500/[0.02] border-b border-cream-200 dark:border-sage-700">
              <span className="inline-block text-[0.7rem] font-semibold tracking-widest uppercase text-sage-500 bg-sage-500/10 px-3 py-1 rounded-full mb-3">Permanent</span>
              <h3 className="font-display text-2xl font-medium text-sage-900 dark:text-cream-50">Al Raha Beach</h3>
            </div>
            <div className="p-7">
              <div className="rounded-xl overflow-hidden mb-5 h-[200px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.0!2d54.61!3d24.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDI3JzM2LjAiTiA1NMKwMzYnMzYuMCJF!5e0!3m2!1sen!2sae!4v1"
                  width="100%" height="200" style={{ border: 0, borderRadius: 12 }}
                  allowFullScreen loading="lazy" title="Al Raha Beach location"
                />
              </div>
              <div className="flex flex-col gap-3.5 mb-5">
                <Detail icon="pin">Crescent Residences, Al Raha Beach<br />1 Ar Raha Street, B Floor, Abu Dhabi</Detail>
                <Detail icon="clock">Daily 7:00 AM – 12:00 AM</Detail>
                <Detail icon="people">~50 seats · Indoor & Outdoor</Detail>
                <Detail icon="phone"><a href="tel:+97126420000" className="text-sage-500 hover:text-sage-700 transition-colors">+971 2 642 XXXX</a></Detail>
              </div>
              <div className="pt-4 border-t border-cream-200 dark:border-sage-700">
                <a href="https://share.google/iCUS82BOBF70QOBdJ" target="_blank" rel="noopener" className="inline-flex px-5 py-2.5 rounded-full bg-sage-500 text-white text-sm font-medium hover:bg-sage-700 transition-colors">
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

          {/* Founder's Memorial */}
          <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.15 }} className="bg-white dark:bg-sage-800 rounded-2xl overflow-hidden border border-cream-200 dark:border-sage-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="p-7 pb-5 bg-gradient-to-br from-terra-400/5 to-terra-400/[0.02] border-b border-cream-200 dark:border-sage-700">
              <span className="inline-block text-[0.7rem] font-semibold tracking-widest uppercase text-terra-400 bg-terra-400/10 px-3 py-1 rounded-full mb-3">Pop-Up</span>
              <h3 className="font-display text-2xl font-medium text-sage-900 dark:text-cream-50">Founder's Memorial</h3>
            </div>
            <div className="p-7">
              <div className="rounded-xl overflow-hidden mb-5 h-[200px]">
                <img src={`${import.meta.env.BASE_URL}images/green-curtains.png`} alt="The Bench pop-up at the Founder's Memorial" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-3.5 mb-5">
                <Detail icon="pin">The Founder's Memorial<br />Ras Al Akhdar, Abu Dhabi</Detail>
                <Detail icon="clock">Daily 4:00 PM – 11:00 PM</Detail>
                <Detail icon="star">Iconic waterfront location with stunning skyline views of Abu Dhabi</Detail>
              </div>
              <div className="pt-4 border-t border-cream-200 dark:border-sage-700">
                <a href="https://share.google/iCUS82BOBF70QOBdJ" target="_blank" rel="noopener" className="inline-flex px-5 py-2.5 rounded-full bg-sage-500 text-white text-sm font-medium hover:bg-sage-700 transition-colors">
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services */}
        <motion.div {...fadeIn} className="text-center mt-12">
          <h4 className="text-sm font-semibold text-sage-600 dark:text-cream-400/70 mb-4">Services Available</h4>
          <div className="flex gap-2.5 justify-center flex-wrap">
            {services.map(s => (
              <span key={s} className="px-5 py-2 rounded-full border border-cream-300 dark:border-sage-700 text-sm text-sage-600 dark:text-cream-400 bg-white dark:bg-sage-800">{s}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Detail({ icon, children }) {
  const icons = {
    pin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></>,
    clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
    people: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></>,
    phone: <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />,
    star: <><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></>,
  }

  return (
    <div className="flex gap-3 items-start text-[0.88rem] text-sage-600 dark:text-cream-400/70 leading-relaxed">
      <svg className="w-[18px] h-[18px] shrink-0 mt-0.5 text-sage-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">{icons[icon]}</svg>
      <span>{children}</span>
    </div>
  )
}
