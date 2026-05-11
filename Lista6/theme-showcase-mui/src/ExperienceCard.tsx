import { Card, Typography, Box } from '@mui/material'
import type { Experience } from './model'

function ExperienceCard({ experience }: { experience: Experience[] }) {
  return (
    <Card sx={{ p: 3 }}>
      <Typography
        variant="caption"
        sx={{ display: 'block', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mb: 2, opacity: 0.6 }}
      >
        Experience
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {experience.map((exp) => (
          <Box key={exp.company} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 1.5 }}>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 600, m: 0 }}>
                {exp.role}
              </Typography>
              <Typography variant="caption" sx={{ mt: 0.25, display: 'block', opacity: 0.65 }}>
                {exp.company}
              </Typography>
            </Box>
            <Typography variant="caption" sx={{ whiteSpace: 'nowrap', opacity: 0.55, flexShrink: 0 }}>
              {exp.period}
            </Typography>
          </Box>
        ))}
      </Box>
    </Card>
  )
}

export default ExperienceCard
