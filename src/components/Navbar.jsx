import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#about', label: 'About' },
  { href: '#menu', label: 'Menu' },
  { href: '#locations', label: 'Locations' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#events', label: 'Events' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <>
      <nav className={`fixed top-0 inset-x-0 z-[100] transition-all duration-400 ${
        scrolled
          ? 'bg-cream-100/95 dark:bg-sage-950/95 border-b border-cream-300 dark:border-sage-800 shadow-sm backdrop-blur-xl'
          : 'bg-cream-50/85 dark:bg-sage-950/85 backdrop-blur-xl border-b border-transparent'
      }`}>
        <div className="max-w-[1240px] mx-auto px-5 md:px-10 flex items-center justify-between h-[72px]">
          {/* Logo */}
          <a href="#hero" onClick={(e) => scrollTo(e, '#hero')} className="flex items-center gap-2.5 font-display text-2xl font-medium text-sage-900 dark:text-cream-100 tracking-wide">
            <svg className="w-7 h-7 text-sage-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.5-3 2-6.5 2-10S13.5 2 12 2z" />
              <path d="M2 12h20" />
              <path d="M12 2c3 2.5 4.5 6 4.5 10s-1.5 7.5-4.5 10" />
            </svg>
            The Bench
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex gap-9">
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={(e) => scrollTo(e, l.href)}
                className="text-sm text-sage-600 dark:text-cream-400 hover:text-sage-900 dark:hover:text-cream-100 transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[1.5px] after:bg-sage-500 hover:after:w-full after:transition-all">
                {l.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button onClick={() => setDark(!dark)} aria-label="Toggle dark mode"
              className="w-9 h-9 rounded-full border border-cream-300 dark:border-sage-700 flex items-center justify-center text-sage-600 dark:text-cream-400 hover:border-sage-500 hover:text-sage-500 transition-colors">
              {dark ? (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5" /><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
              ) : (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" /></svg>
              )}
            </button>

            {/* Hamburger */}
            <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu"
              className="lg:hidden flex flex-col gap-[5px] p-2">
              <span className={`block w-[22px] h-[1.5px] bg-sage-900 dark:bg-cream-100 transition-all origin-center ${mobileOpen ? 'rotate-45 translate-y-[3.25px]' : ''}`} />
              <span className={`block w-[22px] h-[1.5px] bg-sage-900 dark:bg-cream-100 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-[22px] h-[1.5px] bg-sage-900 dark:bg-cream-100 transition-all origin-center ${mobileOpen ? '-rotate-45 -translate-y-[3.25px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[72px] inset-x-0 z-[99] bg-cream-100/95 dark:bg-sage-950/95 backdrop-blur-xl border-b border-cream-300 dark:border-sage-800 shadow-lg lg:hidden"
          >
            <div className="px-5 py-6 flex flex-col gap-1">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={(e) => scrollTo(e, l.href)}
                  className="py-3.5 text-lg text-sage-600 dark:text-cream-400 border-b border-cream-200 dark:border-sage-800 last:border-0 hover:text-sage-500 transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
