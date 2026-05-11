import { useState } from 'react'
import {
  Box,
  Card,
  Typography,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Autocomplete,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import type { Skill, SkillCategory } from './model'
import { skillCategories } from './model'

function ProfileCard({
  name: initialName,
  title: initialTitle,
  location: initialLocation,
  bio: initialBio,
  avatar,
  onProfileChange,
  allSkills,
  currentSkills,
}: {
  name: string
  title: string
  location: string
  bio: string
  avatar: string
  onProfileChange: (data: any) => void
  allSkills: Skill[]
  currentSkills: Skill[]
}) {
  const [openDialog, setOpenDialog] = useState(false)
  const [tempName, setTempName] = useState(initialName)
  const [tempTitle, setTempTitle] = useState(initialTitle)
  const [tempBio, setTempBio] = useState(initialBio)
  const [tempSkills, setTempSkills] = useState<Skill[]>(currentSkills)
  const [customSkillCategory, setCustomSkillCategory] = useState<SkillCategory>('tool')

  const handleOpenDialog = () => {
    setTempName(initialName)
    setTempTitle(initialTitle)
    setTempBio(initialBio)
    setTempSkills(currentSkills)
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const handleSaveDialog = () => {
    onProfileChange({
      name: tempName,
      title: tempTitle,
      location: initialLocation,
      bio: tempBio,
      skills: tempSkills,
    })
    setOpenDialog(false)
  }

  return (
    <>
      <Card sx={{ p: 3, display: 'flex', alignItems: 'center', gap: 2.5, position: 'relative' }}>
        <Avatar sx={{ width: 72, height: 72, fontSize: '1.4rem', fontWeight: 700, flexShrink: 0 }}>
          {avatar}
        </Avatar>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, m: 0 }}>
            {initialName}
          </Typography>
          <Typography variant="body2" sx={{ mt: 0.5, opacity: 0.75, fontWeight: 500 }}>
            {initialTitle}
          </Typography>
          <Typography variant="caption" sx={{ mt: 0.5, opacity: 0.6 }}>
            {initialLocation}
          </Typography>
        </Box>
        <Button
          variant="outlined"
          size="small"
          startIcon={<EditIcon />}
          onClick={handleOpenDialog}
          sx={{ ml: 2 }}
        >
          Edit
        </Button>
      </Card>

      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent sx={{ pt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            label="Name"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            fullWidth
            size="small"
          />
          <TextField
            label="Title"
            value={tempTitle}
            onChange={(e) => setTempTitle(e.target.value)}
            fullWidth
            size="small"
          />
          <TextField
            label="Bio"
            value={tempBio}
            onChange={(e) => setTempBio(e.target.value)}
            fullWidth
            multiline
            rows={3}
            size="small"
          />
          <FormControl fullWidth size="small">
            <InputLabel>Default Category for Custom Skills</InputLabel>
            <Select
              value={customSkillCategory}
              label="Default Category for Custom Skills"
              onChange={(e) => setCustomSkillCategory(e.target.value as SkillCategory)}
            >
              <MenuItem value="language">Language</MenuItem>
              <MenuItem value="framework">Framework</MenuItem>
              <MenuItem value="tool">Tool</MenuItem>
              <MenuItem value="soft">Soft Skill</MenuItem>
            </Select>
          </FormControl>
          <Autocomplete
            multiple
            freeSolo
            options={allSkills}
            getOptionLabel={(option) => typeof option === 'string' ? option : option.name}
            value={tempSkills}
            onChange={(_, newValue) => {
              // Convert any string values to skill objects with selected category
              const skills = newValue.map((val) =>
                typeof val === 'string'
                  ? { name: val, category: customSkillCategory }
                  : val
              )
              setTempSkills(skills)
            }}
            renderInput={(params) => (
              <TextField {...params} label="Skills (type to add custom)" size="small" />
            )}
            isOptionEqualToValue={(option, value) =>
              typeof option === 'string' && typeof value === 'string'
                ? option === value
                : typeof option === 'string' || typeof value === 'string'
                  ? false
                  : option.name === value.name
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSaveDialog} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ProfileCard
