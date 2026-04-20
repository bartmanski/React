import { Card } from './styles';
import * as S from './ProfileCard.styles';

function ProfileCard({ name, title, location, avatar }: {
  name: string
  title: string
  location: string
  avatar: string
}) {
  return (
    <Card>
      <S.ProfileCardContainer>
        <S.ProfileAvatar>{avatar}</S.ProfileAvatar>
        <div>
          <S.ProfileName>{name}</S.ProfileName>
          <S.ProfileTitle>{title}</S.ProfileTitle>
          <S.ProfileLocation>{location}</S.ProfileLocation>
        </div>
      </S.ProfileCardContainer>
    </Card>
  )
}

export default ProfileCard
