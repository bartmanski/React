# Theme Showcase - Alternative Implementations

This directory contains three versions of the Theme Showcase application:

## Project Structure

```
Lista6/
├── theme-showcase/                 # Original CSS version (reference)
├── theme-showcase-tailwind/        # Tailwind CSS implementation  
└── theme-showcase-mui/             # Material UI implementation
```

## Projects

### 1. theme-showcase (Original CSS Version)
Base implementation using plain CSS with theme variants (light/dark/midnight).
- **Status**: Reference implementation
- **Technologies**: React, TypeScript, CSS

### 2. theme-showcase-tailwind (Tailwind CSS Version)
Utility-first CSS approach with Tailwind CSS v4.
- **Port**: 5173
- **Technologies**: React, TypeScript, Tailwind CSS v4, PostCSS
- **Features**:
  - 3 themes: Light, Dark, Midnight
  - Tailwind utility classes for styling
  - Colored skill chips (language, framework, tool, soft skills)
  - Theme switcher with `<select>`

**To run**:
```bash
cd theme-showcase-tailwind
npm install
npm run dev
```

### 3. theme-showcase-mui (Material UI Version)
Component-based approach using Material UI library.
- **Port**: 5174
- **Technologies**: React, TypeScript, Material UI, Emotion
- **Features**:
  - 3 themes: Light, Dark, Midnight
  - MUI components (Card, Typography, Button, Dialog, etc.)
  - Theme switching via `ThemeProvider` and `createTheme`
  - **Bonus**: Edit profile dialog with autocomplete skills selector
  - Colored chips for skill categories

**To run**:
```bash
cd theme-showcase-mui
npm install
npm run dev -- --port 5174
```

## Comparison

| Feature | Tailwind CSS | Material UI |
|---------|-------------|------------|
| **Approach** | Utility-first | Component-based |
| **Bundle Size** | Smaller | Larger (but organized) |
| **Customization** | Via utility classes | Via `sx` prop & themes |
| **Learning Curve** | Classes to memorize | Component API |
| **Theming** | CSS classes + context | `ThemeProvider` |
| **Pre-built Components** | Minimal | Extensive |
| **Edit Dialog** | No | Yes (bonus feature) |

## Key Implementation Details

### Tailwind Version
- Uses PostCSS for processing Tailwind utilities
- Theme colors passed as className props
- Tailwind config defined in `tailwind.config.js`
- CSS theme utilities in `src/tailwind.css`

### MUI Version
- Theme definitions in `src/theme.ts` using `createTheme()`
- `ThemeProvider` wraps the app for theme switching
- Uses `sx` prop for component-level styling
- Dialog for editing profile (unique to MUI version)
- Chip colors dynamically determined based on theme

## Testing

Open both applications and switch between themes:
1. Light theme (white/light gray background)
2. Dark theme (dark blue/slate background)
3. Midnight theme (deep purple background)

Both versions should display the same layout and information with appropriate styling for each theme.
