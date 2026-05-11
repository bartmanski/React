function AboutCard({ text }: { text: string }) {
  return (
    <div className="card">
      <p className="text-xs font-bold uppercase tracking-wider mb-2 opacity-60 m-0">About</p>
      <p className="text-sm opacity-90 m-0 leading-relaxed">{text}</p>
    </div>
  )
}

export default AboutCard
