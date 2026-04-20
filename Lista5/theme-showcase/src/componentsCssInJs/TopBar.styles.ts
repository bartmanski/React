import styled from '@emotion/styled';
import type { ThemeTokens } from './emotion.d';

export const TopBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AppTitle = styled.h1`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${(props: { theme: ThemeTokens }) => props.theme.titleColor};
`;

export const ThemeSelect = styled.select`
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid ${(props: { theme: ThemeTokens }) => props.theme.selectBorder};
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  background: ${(props: { theme: ThemeTokens }) => props.theme.selectBg};
  color: ${(props: { theme: ThemeTokens }) => props.theme.selectText};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;
