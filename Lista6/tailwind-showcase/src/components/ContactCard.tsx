function ContactCard({ email, github, linkedin }: {
  email: string
  github: string
  linkedin: string
}) {
  return (
    <div className="card">
      <h3 className="text-xs font-bold uppercase tracking-wider m-0 mb-4 opacity-60">Contact</h3>
      <div className="flex flex-col gap-1.5">
        <p className="m-0 text-sm">
          <span className="font-semibold mr-1.5">Email</span>{email}
        </p>
        <p className="m-0 text-sm">
          <span className="font-semibold mr-1.5">GitHub</span>{github}
        </p>
        <p className="m-0 text-sm">
          <span className="font-semibold mr-1.5">LinkedIn</span>{linkedin}
        </p>
      </div>
    </div>
  )
}

export default ContactCard
