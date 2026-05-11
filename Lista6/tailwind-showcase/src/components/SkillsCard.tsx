import { skillCategories, type Skill, type SkillCategory } from '../model'

const categoryLabels: Record<SkillCategory, string> = {
  language: 'Languages',
  framework: 'Frameworks',
  tool: 'Tools',
  soft: 'Soft Skills',
}

function SkillsCard({ skills }: { skills: Skill[] }) {
  const categoryMap = {
    language: 'chip-language',
    framework: 'chip-framework',
    tool: 'chip-tool',
    soft: 'chip-soft',
  }

  const grouped = skillCategories
    .map((cat) => ({
      category: cat,
      label: categoryLabels[cat],
      items: skills.filter((s) => s.category === cat),
    }))
    .filter((g) => g.items.length > 0)

  return (
    <div className="card">
      <h3 className="text-xs font-bold uppercase tracking-wider m-0 mb-4 opacity-60">Skills</h3>
      {grouped.map((group) => (
        <div key={group.category} className="mb-3 last:mb-0">
          <p className="text-xs font-semibold uppercase tracking-widest m-0 mb-1.5 opacity-60">{group.label}</p>
          <div className="flex flex-wrap gap-1.5">
            {group.items.map((s) => (
              <span key={s.name} className={`chip ${categoryMap[s.category]}`}>
                {s.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default SkillsCard
