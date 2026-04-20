import { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import type { ThemeMode } from '../model'
import { experience, profile, skills } from '../profileData'
import { themes } from './emotion.d'
import { GlobalStyles } from './GlobalStyles'
import AboutCard from './AboutCard'
import ContactCard from './ContactCard'
import ExperienceCard from './ExperienceCard'
import ProfileCard from './ProfileCard'
import SkillsCard from './SkillsCard'
import TopBar from './TopBar'
import { AppContainer, ContentContainer } from './styles'

function AppCssInJs() {
  const [theme, setTheme] = useState<ThemeMode>('light')

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <AppContainer>
        <ContentContainer>
          <TopBar theme={theme} onThemeChange={setTheme} />
          <ProfileCard
            name={profile.name}
            title={profile.title}
            location={profile.location}
            avatar={profile.avatar}
          />
          <AboutCard text={profile.bio} />
          <SkillsCard skills={skills} />
          <ExperienceCard experience={experience} />
          <ContactCard
            email={profile.email}
            github={profile.github}
            linkedin={profile.linkedin}
          />
        </ContentContainer>
      </AppContainer>
    </ThemeProvider>
  )
}

export default AppCssInJs
