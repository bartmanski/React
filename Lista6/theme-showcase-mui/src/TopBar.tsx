import { Box, Card, Typography, Select, MenuItem } from '@mui/material'
import type { ThemeMode } from './model'

const themeOptions: ThemeMode[] = ['light', 'dark', 'midnight']

function TopBar({ theme, onThemeChange }: {
  theme: ThemeMode
  onThemeChange: (t: ThemeMode) => void
}) {
  return (
    <Card sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 700, m: 0 }}>
          Theme Showcase
        </Typography>
        <Select
          value={theme}
          onChange={(e) => onThemeChange(e.target.value as ThemeMode)}
          size="small"
          sx={{ minWidth: 120, fontSize: '0.85rem' }}
        >
          {themeOptions.map((t) => (
            <MenuItem key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </MenuItem>
          ))}
        </Select>
      </Box>
    </Card>
  )
}

export default TopBar
