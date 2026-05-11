import { Card, Typography, Box, Chip, useTheme } from '@mui/material'
import { skillCategories, type Skill, type SkillCategory } from './model'

const categoryLabels: Record<SkillCategory, string> = {
  language: 'Languages',
  framework: 'Frameworks',
  tool: 'Tools',
  soft: 'Soft Skills',
}

function getChipColor(category: SkillCategory, theme: ReturnType<typeof useTheme>): { bg: string; text: string; border: string } {
  const isDark = theme.palette.mode === 'dark'

  switch (category) {
    case 'language':
      return {
        bg: isDark ? '#1e3a5f' : '#dbeafe',
        text: isDark ? '#93c5fd' : '#1e40af',
        border: isDark ? '#3b82f6' : '#93c5fd',
      }
    case 'framework':
      return {
        bg: isDark ? '#1b4332' : '#dcfce7',
        text: isDark ? '#86efac' : '#166534',
        border: isDark ? '#22c55e' : '#86efac',
      }
    case 'tool':
      return {
        bg: isDark ? '#4d2e0f' : '#fef3c7',
        text: isDark ? '#fcd34d' : '#92400e',
        border: isDark ? '#facc15' : '#fcd34d',
      }
    case 'soft':
      return {
        bg: isDark ? '#4c1d95' : '#ede9fe',
        text: isDark ? '#c4b5fd' : '#5b21b6',
        border: isDark ? '#8b5cf6' : '#c4b5fd',
      }
  }
}

function SkillsCard({ defaultSkills, userSkills }: { defaultSkills: Skill[]; userSkills: Skill[] }) {
  const theme = useTheme()
  
  // Only display user-selected skills, not all available skills
  const grouped = skillCategories
    .map((cat) => ({
      category: cat,
      label: categoryLabels[cat],
      items: userSkills.filter((s) => s.category === cat),
    }))
    .filter((g) => g.items.length > 0)

  return (
    <Card sx={{ p: 3 }}>
      <Typography
        variant="caption"
        sx={{ display: 'block', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mb: 2, opacity: 0.6 }}
      >
        Skills
      </Typography>
      {grouped.map((group) => (
        <Box key={group.category} sx={{ mb: 1.5, '&:last-child': { mb: 0 } }}>
          <Typography
            variant="caption"
            sx={{ display: 'block', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', mb: 0.75, opacity: 0.6 }}
          >
            {group.label}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {group.items.map((s) => {
              const colors = getChipColor(s.category, theme)
              return (
                <Chip
                  key={s.name}
                  label={s.name}
                  size="small"
                  sx={{
                    backgroundColor: colors.bg,
                    color: colors.text,
                    borderColor: colors.border,
                    border: '1px solid',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    height: 'auto',
                    padding: '4px 8px',
                  }}
                />
              )
            })}
          </Box>
        </Box>
      ))}
    </Card>
  )
}

export default SkillsCard
