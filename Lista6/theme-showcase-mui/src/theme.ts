import { createTheme } from '@mui/material/styles'

export const themes = {
  light: createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#f1f5f9',
        paper: '#ffffff',
      },
      text: {
        primary: '#334155',
        secondary: '#64748b',
      },
      primary: {
        main: '#3b82f6',
      },
      divider: '#e2e8f0',
    },
    typography: {
      fontFamily: '"Inter", "Segoe UI", sans-serif',
    },
  }),
  dark: createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#0f172a',
        paper: '#1e293b',
      },
      text: {
        primary: '#94a3b8',
        secondary: '#64748b',
      },
      primary: {
        main: '#6366f1',
      },
      divider: '#334155',
    },
    typography: {
      fontFamily: '"Inter", "Segoe UI", sans-serif',
    },
  }),
  midnight: createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#1a1025',
        paper: '#261838',
      },
      text: {
        primary: '#c4b5fd',
        secondary: '#8b5cf6',
      },
      primary: {
        main: '#7c3aed',
      },
      divider: '#3b2756',
    },
    typography: {
      fontFamily: '"Inter", "Segoe UI", sans-serif',
    },
  }),
}
