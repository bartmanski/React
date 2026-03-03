import { BusinessCard } from './components/BusinessCard'
import './App.css'

function App() {
  return (
    <div className="app">
      <BusinessCard
        imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
        name="Bartosz Kebel"
        position="Senior Full-Stack Developer & Software Architect"
        email="bartosz.kebel@example.com"
        phone="+48 123 456 789"
        website="www.bartoszkebel.dev"
        about="Jestem doświadczonym programistą z ponad 8-letnim stażem w branży IT, specjalizującym się w tworzeniu nowoczesnych aplikacji webowych i mobilnych. Moja pasja do technologii łączy się z umiejętnością przekładania złożonych wymagań biznesowych na eleganckie rozwiązania techniczne. W codziennej pracy cenię sobie czysty kod, dobre praktyki oraz ciągłe doskonalenie swoich umiejętności poprzez naukę nowych technologii i frameworków."
        skills={[
          'TypeScript',
          'React',
          'Node.js',
          'Python',
          'Docker',
          'Kubernetes',
          'AWS',
          'PostgreSQL',
          'MongoDB',
          'GraphQL',
          'REST API',
          'CI/CD',
          'Git',
          'Agile/Scrum'
        ]}
      />
    </div>
  )
}

export default App
