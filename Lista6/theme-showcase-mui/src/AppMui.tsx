import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import type { ThemeMode } from './model'
import { experience, profile, skills as allSkills } from './profileData'
import type { Skill } from './model'
import { themes } from './theme'
import TopBar from './TopBar'
import ProfileCard from './ProfileCard'
import AboutCard from './AboutCard'
import SkillsCard from './SkillsCard'
import ExperienceCard from './ExperienceCard'
import ContactCard from './ContactCard'

function AppMui() {
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>('light')
  const [profileData, setProfileData] = useState({
    name: profile.name,
    title: profile.title,
    location: profile.location,
    bio: profile.bio,
    skills: [] as Skill[],
  })

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', py: 4, px: 2 }}>
        <Box sx={{ maxWidth: '720px', mx: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TopBar theme={currentTheme} onThemeChange={setCurrentTheme} />
          <ProfileCard
            name={profileData.name}
            title={profileData.title}
            location={profileData.location}
            bio={profileData.bio}
            avatar={profile.avatar}
            onProfileChange={setProfileData}
            allSkills={allSkills}
            currentSkills={profileData.skills}
          />
          <AboutCard text={profileData.bio} />
          <SkillsCard defaultSkills={allSkills} userSkills={profileData.skills} />
          <ExperienceCard experience={experience} />
          <ContactCard
            email={profile.email}
            github={profile.github}
            linkedin={profile.linkedin}
          />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default AppMui
