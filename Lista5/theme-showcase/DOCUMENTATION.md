# Theme Showcase - Dokumentacja

Projekt zawiera trzy implementacje tego samego interfejsu użytkownika z różnymi podejściami do stylowania:

## 1. CSS (Wersja Bazowa)
📁 `src/components/` + `styles.css`

Klasyczne podejście CSS z nazwami klas i selektorami. Importem do aplikacji poprzez:
```tsx
import './styles.css'
```

## 2. SCSS Modules
📁 `src/componentsScss/`

### Struktura plików SCSS:
- **`_variables.scss`** - Zmienne dla spacing, border-radius, rozmiaru czcionki, wag, breakpoints
- **`_mixins.scss`** - Mixins dla:
  - `@mixin respond-to()` - Responsive design
  - `@mixin flex-center`, `@mixin flex-column`, `@mixin flex-between` - Flexbox utilities
  - `@mixin text-heading`, `@mixin text-label`, `@mixin text-semibold` - Typografia
  - `@mixin card-base` - Karty
  - `@mixin opacity-*` - Opacity utilities
- **`_themes.scss`** - MAPY kolorów ($theme-light, $theme-dark, $theme-midnight) i @mixin apply-theme() do generowania CSS dla każdego motywu
- **`_base.scss`** - Style globalne i elementy bazowe
- **`*.module.scss`** - Style dla poszczególnych komponentów (Card, TopBar, ProfileCard, itd.)
- **`global.scss`** - Plik importujący wszystkie moduły

### Zalety SCSS Modules:
✅ Zmienne do łatwego zarządzania wartościami
✅ Mixins dla przedefiniowanych stylów
✅ Mapy (maps) do organizacji wariantów tematów
✅ Zagnieżdżanie dla czystszego kodu
✅ Modułowość - każdy komponenty ma swój plik .module.scss
✅ Reusable utilities

### Import w komponencie:
```tsx
import styles from './TopBar.module.scss'
<div className={styles.topBar}>...</div>
```

## 3. CSS-in-JS (Emotion)
📁 `src/componentsCssInJs/`

### Struktura plików:
- **`emotion.d.ts`** - TypeScript definicje typów dla motywów (ThemeTokens interface)
- **`GlobalStyles.tsx`** - Komponenty Global do stylów globalnych
- **`styles.ts`** - Komponenty Card, CardHeading, AppContainer, ContentContainer
- **`*.styles.ts`** - Style dla poszczególnych komponentów (TopBar.styles, ProfileCard.styles, itd.)
- **`*.tsx`** - Komponenty React

### Zalety Emotion:
✅ TypeScript support i type-safe themes
✅ Dynamiczne stylizowanie oparte na props
✅ ThemeProvider do zarządzania motywami
✅ CSS-in-JS ze wsparciem pseudo-selektorów i media queries
✅ Komponenty styled dla semantycznego kodu
✅ Brak osobnych plików CSS

### Import i użycie:
```tsx
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

export const MyStyledComponent = styled.div`
  color: ${props => props.theme.textPrimary};
`
```

## Porównanie Podejść

| Aspekt | CSS | SCSS Modules | Emotion |
|--------|-----|--------------|---------|
| Zmienne | ❌ | ✅ | ✅ |
| Mixins | ❌ | ✅ | ⚠️ (funkcje) |
| Zagnieżdżanie | ❌ | ✅ | ✅ |
| TypeScript | ❌ | ⚠️ | ✅ |
| Dynamiczne stylizowanie | ❌ | ❌ | ✅ |
| Całkowity rozmiar bundla | Mały | Średni | Średni |
| Bundling CSS | ✅ Automatycznie | ✅ Automatycznie | ✅ Automatycznie |
| Izolacja stylów | ❌ | ✅ | ✅ |
| Łatwość uczenia | ✅ | ✅ | ⚠️ (więcej koncepcji) |

## Jak przełączać się między wersjami

Zmodyfikuj plik `src/App.tsx`:

```tsx
// Wersja CSS (domyślnie)
import App from './components/AppCss'

// Lub SCSS Modules
// import App from './componentsScss/AppScss'

// Lub Emotion
// import App from './componentsCssInJs/AppCssInJs'

export default App
```

Następnie: `npm run dev`

## Zainstalowane zależności

```json
{
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "sass": "^1.99.0"
  }
}
```

## Wymogi Laboratorium

### ✅ SCSS Modules zawiera:
1. ✅ Zmienne (`_variables.scss`)
2. ✅ Co najmniej jeden mixin (`_mixins.scss` - 10+ mixinów!)
3. ✅ Co najmniej jedną mapę (`_themes.scss` - mapy dla każdego motywu)
4. ✅ Sensowne użycie zagnieżdżania (w `_themes.scss` i modułach)
5. ✅ Generowanie CSS dla każdego motywu via @mixin apply-theme()

### ✅ Emotion zawiera:
1. ✅ @emotion/styled (używane w `*.styles.ts`)
2. ✅ ThemeProvider i tokeny motywu light/dark/midnight (`emotion.d.ts`)
3. ✅ Global component z emotion (w `GlobalStyles.tsx`)
4. ✅ Brak osobnych plików CSS
5. ✅ TypeScript support dla motywów

### ✅ Ogólne wymagania:
1. ✅ Wersja bazowa nie jest modyfikowana
2. ✅ Funkcjonalność i wygląd zachowany we wszystkich wersjach
3. ✅ Przełączanie między wersjami w `src/App.tsx`
4. ✅ Wszystkie motywu (light, dark, midnight) działamy we wszystkich wersjach
