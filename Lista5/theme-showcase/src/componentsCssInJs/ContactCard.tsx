import { Card, CardHeading } from './styles';
import * as S from './ContactCard.styles';

function ContactCard({ email, github, linkedin }: {
  email: string
  github: string
  linkedin: string
}) {
  return (
    <Card>
      <CardHeading>Contact</CardHeading>
      <S.ContactList>
        <S.ContactItem>
          <S.ContactLabel>Email</S.ContactLabel>{email}
        </S.ContactItem>
        <S.ContactItem>
          <S.ContactLabel>GitHub</S.ContactLabel>{github}
        </S.ContactItem>
        <S.ContactItem>
          <S.ContactLabel>LinkedIn</S.ContactLabel>{linkedin}
        </S.ContactItem>
      </S.ContactList>
    </Card>
  )
}

export default ContactCard
