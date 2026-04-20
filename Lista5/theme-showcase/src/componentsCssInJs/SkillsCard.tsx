import { skillCategories, type Skill, type SkillCategory } from '../model';
import { Card, CardHeading } from './styles';
import * as S from './SkillsCard.styles';

const categoryLabels: Record<SkillCategory, string> = {
  language: 'Languages',
  framework: 'Frameworks',
  tool: 'Tools',
  soft: 'Soft Skills',
}

function SkillsCard({ skills }: { skills: Skill[] }) {
  const grouped = skillCategories.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    items: skills.filter((s) => s.category === cat),
  })).filter((g) => g.items.length > 0)

  return (
    <Card>
      <CardHeading>Skills</CardHeading>
      {grouped.map((group) => (
        <S.SkillGroup key={group.category}>
          <S.SkillGroupLabel>{group.label}</S.SkillGroupLabel>
          <S.SkillChips>
            {group.items.map((s) => (
              <S.Chip key={s.name} category={s.category}>
                {s.name}
              </S.Chip>
            ))}
          </S.SkillChips>
        </S.SkillGroup>
      ))}
    </Card>
  )
}

export default SkillsCard
