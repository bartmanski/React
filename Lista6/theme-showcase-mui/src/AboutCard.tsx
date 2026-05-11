import { Card, Typography } from '@mui/material'

function AboutCard({ text }: { text: string }) {
  return (
    <Card sx={{ p: 3 }}>
      <Typography
        variant="caption"
        sx={{ display: 'block', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mb: 1.25, opacity: 0.6 }}
      >
        About
      </Typography>
      <Typography variant="body2" sx={{ m: 0, lineHeight: 1.65 }}>
        {text || 'No bio added yet. Click Edit to add one.'}
      </Typography>
    </Card>
  )
}

export default AboutCard
