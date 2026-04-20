import styled from '@emotion/styled';
import type { ThemeTokens } from './emotion.d';

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ExperienceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
`;

export const ExperienceRole = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 0.9rem;
  color: ${(props: { theme: ThemeTokens }) => props.theme.titleColor};
`;

export const ExperienceCompany = styled.p`
  margin: 2px 0 0;
  font-size: 0.8rem;
  opacity: 0.65;
`;

export const ExperiencePeriod = styled.span`
  font-size: 0.78rem;
  white-space: nowrap;
  opacity: 0.55;
`;
