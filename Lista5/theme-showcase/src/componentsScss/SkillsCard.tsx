import { skillCategories, type Skill, type SkillCategory } from '../model';
import styles from './SkillsCard.module.scss';
import cardStyles from './Card.module.scss';

const categoryLabels: Record<SkillCategory, string> = {
  language: 'Languages',
  framework: 'Frameworks',
  tool: 'Tools',
  soft: 'Soft Skills',
}

const chipClassMap: Record<SkillCategory, string> = {
  language: styles.chipLanguage,
  framework: styles.chipFramework,
  tool: styles.chipTool,
  soft: styles.chipSoft,
}

function SkillsCard({ skills }: { skills: Skill[] }) {
  const grouped = skillCategories.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    items: skills.filter((s) => s.category === cat),
  })).filter((g) => g.items.length > 0)

  return (
    <div className="card">
      <h3 className={cardStyles.cardHeading}>Skills</h3>
      {grouped.map((group) => (
        <div key={group.category} className={styles.skillGroup}>
          <p className={styles.skillGroupLabel}>{group.label}</p>
          <div className={styles.skillChips}>
            {group.items.map((s) => (
              <span key={s.name} className={`${styles.chip} ${chipClassMap[s.category]}`}>
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
