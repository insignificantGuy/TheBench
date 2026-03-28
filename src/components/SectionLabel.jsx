export default function SectionLabel({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-sage-500 mb-4">
      <span className="w-5 h-[1.5px] bg-sage-500" />
      {children}
    </span>
  )
}
