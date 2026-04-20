import styled from '@emotion/styled';
import type { ThemeTokens } from './emotion.d';

export const ProfileCardContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ProfileAvatar = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  flex-shrink: 0;
  background: ${(props: { theme: ThemeTokens }) => props.theme.avatarBg};
`;

export const ProfileName = styled.h2`
  margin: 0;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${(props: { theme: ThemeTokens }) => props.theme.titleColor};
`;

export const ProfileTitle = styled.p`
  margin: 4px 0 0;
  font-size: 0.9rem;
  font-weight: 500;
  opacity: 0.75;
`;

export const ProfileLocation = styled.p`
  margin: 4px 0 0;
  font-size: 0.8rem;
  opacity: 0.6;
`;
