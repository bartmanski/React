// Theme type definition for TypeScript
export interface ThemeTokens {
  name: string;
  background: string;
  textPrimary: string;
  textSecondary: string;
  textTertiary: string;
  cardBg: string;
  cardBorder: string;
  titleColor: string;
  avatarBg: string;
  selectBg: string;
  selectBorder: string;
  selectText: string;
  headingColor: string;
}

// Theme definitions
export const themes: Record<string, ThemeTokens> = {
  light: {
    name: 'light',
    background: '#f1f5f9',
    textPrimary: '#334155',
    textSecondary: '#0f172a',
    textTertiary: '#e9d5ff',
    cardBg: '#ffffff',
    cardBorder: '#e2e8f0',
    titleColor: '#0f172a',
    avatarBg: '#3b82f6',
    selectBg: '#f8fafc',
    selectBorder: '#cbd5e1',
    selectText: '#334155',
    headingColor: '#64748b',
  },
  dark: {
    name: 'dark',
    background: '#0f172a',
    textPrimary: '#94a3b8',
    textSecondary: '#f1f5f9',
    textTertiary: '#e2e8f0',
    cardBg: '#1e293b',
    cardBorder: '#334155',
    titleColor: '#f1f5f9',
    avatarBg: '#6366f1',
    selectBg: '#0f172a',
    selectBorder: '#475569',
    selectText: '#e2e8f0',
    headingColor: '#64748b',
  },
  midnight: {
    name: 'midnight',
    background: '#1a1025',
    textPrimary: '#c4b5fd',
    textSecondary: '#e9d5ff',
    textTertiary: '#e9d5ff',
    cardBg: '#261838',
    cardBorder: '#3b2756',
    titleColor: '#e9d5ff',
    avatarBg: '#7c3aed',
    selectBg: '#1a1025',
    selectBorder: '#5b21b6',
    selectText: '#e9d5ff',
    headingColor: '#8b5cf6',
  },
};

// Declare module for TypeScript
declare module '@emotion/react' {
  export interface Theme extends ThemeTokens {}
}
