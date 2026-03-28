export default function Footer() {
  return (
    <footer className="bg-sage-950 text-cream-100 pt-16 pb-8">
      <div className="max-w-[1240px] mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-normal mb-3">The Bench</h3>
            <p className="text-sm text-cream-100/50 leading-relaxed mb-5">Abu Dhabi's jungle-chic specialty café. A botanical escape where coffee meets the sunset.</p>
            <div className="flex gap-3">
              <a href="https://instagram.com/thebench.ad" target="_blank" rel="noopener" aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-cream-100/15 flex items-center justify-center text-cream-100/60 hover:border-sage-300 hover:text-sage-300 hover:bg-sage-300/10 transition-all">
                <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-cream-100/40 mb-5">Navigate</h4>
            {['About', 'Menu', 'Gallery', 'Events', 'Contact'].map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-cream-100/60 py-1 hover:text-sage-300 transition-colors">{l}</a>
            ))}
          </div>

          {/* Al Raha */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-cream-100/40 mb-5">Al Raha Beach</h4>
            <p className="text-sm text-cream-100/50 leading-relaxed mb-2">Crescent Residences<br />1 Ar Raha Street, B Floor<br />Abu Dhabi, UAE</p>
            <p className="text-sm text-cream-100/50">Daily 7 AM – 12 AM</p>
          </div>

          {/* Founder's Memorial */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-cream-100/40 mb-5">Founder's Memorial</h4>
            <p className="text-sm text-cream-100/50 leading-relaxed mb-2">Ras Al Akhdar<br />Abu Dhabi, UAE</p>
            <p className="text-sm text-cream-100/50">Daily 4 PM – 11 PM</p>
          </div>
        </div>

        <div className="pt-8 border-t border-cream-100/10 text-center">
          <p className="text-xs text-cream-100/30">&copy; {new Date().getFullYear()} The Bench. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
