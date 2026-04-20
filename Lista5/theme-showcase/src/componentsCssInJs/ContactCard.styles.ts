import styled from '@emotion/styled';
import type { ThemeTokens } from './emotion.d';

export const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ContactItem = styled.p`
  margin: 0;
  font-size: 0.88rem;
`;

export const ContactLabel = styled.span`
  font-weight: 600;
  margin-right: 6px;
  color: ${(props: { theme: ThemeTokens }) => props.theme.titleColor};
`;
