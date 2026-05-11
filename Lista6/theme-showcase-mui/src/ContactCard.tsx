import { Card, Typography, Box } from '@mui/material'

function ContactCard({ email, github, linkedin }: {
  email: string
  github: string
  linkedin: string
}) {
  return (
    <Card sx={{ p: 3 }}>
      <Typography
        variant="caption"
        sx={{ display: 'block', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mb: 2, opacity: 0.6 }}
      >
        Contact
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
        <Typography variant="body2" sx={{ m: 0 }}>
          <Box component="span" sx={{ fontWeight: 600, mr: 0.75 }}>
            Email
          </Box>
          {email}
        </Typography>
        <Typography variant="body2" sx={{ m: 0 }}>
          <Box component="span" sx={{ fontWeight: 600, mr: 0.75 }}>
            GitHub
          </Box>
          {github}
        </Typography>
        <Typography variant="body2" sx={{ m: 0 }}>
          <Box component="span" sx={{ fontWeight: 600, mr: 0.75 }}>
            LinkedIn
          </Box>
          {linkedin}
        </Typography>
      </Box>
    </Card>
  )
}

export default ContactCard
