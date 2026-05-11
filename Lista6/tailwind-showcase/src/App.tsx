import { useState } from 'react'
import { profile, skills, experience } from './profileData'
import type { ThemeMode } from './model'
import TopBar from './components/TopBar'
import ProfileCard from './components/ProfileCard'
import AboutCard from './components/AboutCard'
import SkillsCard from './components/SkillsCard'
import ExperienceCard from './components/ExperienceCard'
import ContactCard from './components/ContactCard'

function App() {
  const [theme, setTheme] = useState<ThemeMode>('light')

  return (
    <div data-theme={theme} className="min-h-screen px-4 py-8 transition-colors">
      <div className="max-w-2xl mx-auto flex flex-col gap-4">
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
      </div>
    </div>
  )
}

export default App
