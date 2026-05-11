import type { Experience } from '../model'

function ExperienceCard({ experience }: { experience: Experience[] }) {
  return (
    <div className="card">
      <h3 className="text-xs font-bold uppercase tracking-wider m-0 mb-4 opacity-60">Experience</h3>
      <div className="flex flex-col gap-3">
        {experience.map((exp) => (
          <div key={exp.company} className="flex justify-between items-baseline gap-3">
            <div>
              <p className="m-0 font-semibold text-sm">{exp.role}</p>
              <p className="mt-0.5 text-xs opacity-65">{exp.company}</p>
            </div>
            <span className="text-xs opacity-55 whitespace-nowrap">{exp.period}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExperienceCard
