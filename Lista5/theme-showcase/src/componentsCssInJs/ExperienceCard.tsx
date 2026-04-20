import type { Experience } from '../model';
import { Card, CardHeading } from './styles';
import * as S from './ExperienceCard.styles';

function ExperienceCard({ experience }: { experience: Experience[] }) {
  return (
    <Card>
      <CardHeading>Experience</CardHeading>
      <S.ExperienceList>
        {experience.map((exp) => (
          <S.ExperienceItem key={exp.company}>
            <div>
              <S.ExperienceRole>{exp.role}</S.ExperienceRole>
              <S.ExperienceCompany>{exp.company}</S.ExperienceCompany>
            </div>
            <S.ExperiencePeriod>{exp.period}</S.ExperiencePeriod>
          </S.ExperienceItem>
        ))}
      </S.ExperienceList>
    </Card>
  )
}

export default ExperienceCard
