import styled from '@emotion/styled';
import type { ThemeTokens } from './emotion.d';

export const AppContainer = styled.div`
  min-height: 100vh;
  padding: 32px 16px;
  background: ${(props: { theme: ThemeTokens }) => props.theme.background};
  color: ${(props: { theme: ThemeTokens }) => props.theme.textPrimary};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
`;

export const ContentContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Card = styled.div`
  border-radius: 12px;
  padding: 24px;
  border: 1px solid ${(props: { theme: ThemeTokens }) => props.theme.cardBorder};
  background: ${(props: { theme: ThemeTokens }) => props.theme.cardBg};
`;

export const CardHeading = styled.h3`
  margin: 0 0 10px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${(props: { theme: ThemeTokens }) => props.theme.headingColor};
`;
