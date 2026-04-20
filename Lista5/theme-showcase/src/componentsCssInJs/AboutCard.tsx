import { Card, CardHeading } from './styles';
import * as S from './AboutCard.styles';

function AboutCard({ text }: { text: string }) {
  return (
    <Card>
      <CardHeading>About</CardHeading>
      <S.AboutText>{text}</S.AboutText>
    </Card>
  )
}

export default AboutCard
