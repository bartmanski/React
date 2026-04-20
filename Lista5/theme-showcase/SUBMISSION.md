# 🎨 Theme Showcase - Zadanie laboratoryjne (10 pkt)

## ✅ Wykonane zadanie

Projekt zawiera **trzy pełne implementacje** tego samego interfejsu użytkownika z różnymi podejściami do stylowania:

---

## 📂 Struktura projektu

```
theme-showcase/
├── src/
│   ├── components/          # ✅ CSS (WERSJA BAZOWA - nie modyfikowana)
│   │   ├── AppCss.tsx
│   │   ├── TopBar.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── AboutCard.tsx
│   │   ├── SkillsCard.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── ContactCard.tsx
│   │   └── styles.css
│   ├── componentsScss/      # ✅ SCSS MODULES IMPLEMENTATION
│   │   ├── AppScss.tsx
│   │   ├── TopBar.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── AboutCard.tsx
│   │   ├── SkillsCard.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── ContactCard.tsx
│   │   ├── global.scss
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _themes.scss
│   │   ├── _base.scss
│   │   ├── Card.module.scss
│   │   ├── TopBar.module.scss
│   │   ├── ProfileCard.module.scss
│   │   ├── AboutCard.module.scss
│   │   ├── SkillsCard.module.scss
│   │   ├── ExperienceCard.module.scss
│   │   └── ContactCard.module.scss
│   ├── componentsCssInJs/   # ✅ EMOTION CSS-IN-JS IMPLEMENTATION
│   │   ├── AppCssInJs.tsx
│   │   ├── TopBar.tsx
│   │   ├── ProfileCard.tsx
│   │   ├── AboutCard.tsx
│   │   ├── SkillsCard.tsx
│   │   ├── ExperienceCard.tsx
│   │   ├── ContactCard.tsx
│   │   ├── emotion.d.ts
│   │   ├── GlobalStyles.tsx
│   │   ├── styles.ts
│   │   ├── TopBar.styles.ts
│   │   ├── ProfileCard.styles.ts
│   │   ├── AboutCard.styles.ts
│   │   ├── SkillsCard.styles.ts
│   │   ├── ExperienceCard.styles.ts
│   │   └── ContactCard.styles.ts
│   ├── App.tsx              # Przełączanie między implementacjami
│   ├── main.tsx
│   ├── model.ts
│   └── profileData.ts
├── DOCUMENTATION.md         # Pełna dokumentacja
└── package.json
```

---

## 🎯 SCSS Modules Implementation

📁 `src/componentsScss/`

### ✅ Wymagane elementy:

#### 1️⃣ **Zmienne** (`_variables.scss`)
```scss
$spacing-xs: 4px;
$spacing-sm: 6px;
$spacing-md: 12px;
$spacing-lg: 16px;
// ... itd
$radius-sm: 8px;
$font-size-xs: 0.75rem;
$font-weight-bold: 700;
```

#### 2️⃣ **Mixiny** (`_mixins.scss`) - 10+ mixinów:
```scss
@mixin respond-to($breakpoint) { ... }
@mixin flex-center { ... }
@mixin flex-between { ... }
@mixin flex-column { ... }
@mixin text-heading { ... }
@mixin text-label { ... }
@mixin card-base { ... }
@mixin opacity-reduced { ... }
// itd...
```

#### 3️⃣ **Mapy** (`_themes.scss`) - Mapy kolorów dla każdego motywu
```scss
$theme-light: (
  name: 'light',
  background: #f1f5f9,
  text-primary: #334155,
  // ... wszystkie kolory
);

$theme-dark: ( ... );
$theme-midnight: ( ... );

// Mixin aplicujący mapę do CSS
@mixin apply-theme($theme) {
  background: map-get($theme, background);
  color: map-get($theme, text-primary);
  // ... dynamiczne generowanie CSS dla każdego motywu
}
```

#### 4️⃣ **Zagnieżdżanie**
```scss
// W _themes.scss:
.app.theme-light {
  @include apply-theme($theme-light);
  
  .card {
    background: map-get($theme, card-bg);
    border-color: map-get($theme, card-border);
  }
}
```

#### 5️⃣ **CSS Modules**
- Każdy komponent ma swój plik `.module.scss`
- Izolacja stylów poprzez CSS Modules
- Import: `import styles from './Card.module.scss'`
- Użycie: `className={styles.cardHeading}`

---

## 🎨 Emotion CSS-in-JS Implementation

📁 `src/componentsCssInJs/`

### ✅ Wymagane elementy:

#### 1️⃣ **@emotion/styled**
```tsx
import styled from '@emotion/styled'

export const AppContainer = styled.div`
  min-height: 100vh;
  padding: 32px 16px;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme.textPrimary};
  // ... Dynamic CSS based on theme
`
```

#### 2️⃣ **ThemeProvider i Tokeny Motywu** (`emotion.d.ts`)
```tsx
// Theme type definition
export interface ThemeTokens {
  name: string;
  background: string;
  textPrimary: string;
  // ... wszystkie właściwości
}

// Theme definitions
export const themes: Record<string, ThemeTokens> = {
  light: { ... },
  dark: { ... },
  midnight: { ... }
}

// TypeScript integration
declare module '@emotion/react' {
  export interface Theme extends ThemeTokens {}
}
```

W aplikacji:
```tsx
<ThemeProvider theme={themes[theme]}>
  {/* Komponenty */}
</ThemeProvider>
```

#### 3️⃣ **Global Styles** (`GlobalStyles.tsx`)
```tsx
import { Global, css } from '@emotion/react'

export const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        box-sizing: border-box;
      }
      body {
        font-family: 'Inter', 'Segoe UI', sans-serif;
      }
    `}
  />
)
```

Brak osobnych plików CSS! ✅

#### 4️⃣ **Komponenty Styled** (`*.styles.ts`)
```tsx
// Card.styles.ts
export const Card = styled.div`
  border-radius: 12px;
  padding: 24px;
  border: 1px solid ${(props) => props.theme.cardBorder};
  background: ${(props) => props.theme.cardBg};
`
```

#### 5️⃣ **Dynamiczne Stylizowanie**
```tsx
interface ChipProps {
  category: string;
}

export const Chip = styled.span<ChipProps>`
  ${(props) => {
    switch (props.category) {
      case 'language':
        return `background: #dbeafe; color: #1e40af;`
      case 'framework':
        return `background: #dcfce7; color: #166534;`
      // itd...
    }
  }}
`
```

---

## 🔄 Jak przełączać się między wersjami

Edytuj plik **`src/App.tsx`**:

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

---

## 🧪 Testowanie

```bash
# Zainstalować zależności
npm install

# Uruchomić dev server
npm run dev

# Budować na producję
npm run build

# Lint
npm run lint
```

Build udał się pomyślnie! ✅

```
✓ vite v8.0.8 building client environment for production...
✓ 25 modules transformed.
dist/index.html                   0.47 kB │ gzip:  0.30 kB
dist/assets/index-BqEhscE0.css    3.51 kB │ gzip:  1.06 kB
dist/assets/index-CesQ6qzy.js   194.55 kB │ gzip: 61.21 kB
✓ built in 386ms
```

---

## 🎁 Zainstalowane zależności

```json
{
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.1",
    "react": "^19.2.4",
    "react-dom": "^19.2.4",
    "sass": "^1.99.0"
  }
}
```

---

## ✨ Porównanie trzech podejść

| Cecha | CSS | SCSS Modules | Emotion |
|-------|-----|--------------|---------|
| **Zmienne** | ❌ | ✅ CSS vars | ✅ JS objects |
| **Mixins** | ❌ | ✅ 10+ mixinów | ⚠️ Functions only |
| **Mapy/Obiekty** | ❌ | ✅ Maps z @mixin apply-theme | ✅ Record<string, ThemeTokens> |
| **Zagnieżdżanie** | ❌ | ✅ Zagnieżdżanie SCSS | ✅ CSS-in-JS nesting |
| **TypeScript** | ❌ | ⚠️ Limited | ✅ Full support |
| **Dynamiczne stylizowanie** | ❌ | ❌ | ✅ Based on props |
| **Rozmiar bundla** | Najmniejszy | Średni | Średni |
| **Izolacja stylów** | ❌ | ✅ CSS Modules | ✅ Automatic |
| **Brak plików CSS** | ❌ | ❌ | ✅ |

---

## 📝 Spełnione wymagania

### ✅ Wymagania ogólne

- ✅ Wersja bazowa (`src/components/`) nie jest modyfikowana
- ✅ SCSS i Emotion zachowują tę samą funkcjonalność co wersja bazowa
- ✅ Wszystkie motywy (light, dark, midnight) działają we wszystkich wersjach
- ✅ Przełączanie implementacji w `src/App.tsx`

### ✅ SCSS Modules zawiera

1. ✅ **Zmienne** - 30+ zmiennych w `_variables.scss` (spacing, border-radius, font-sizes, weights, breakpoints)
2. ✅ **Mixiny** - 10+ mixinów (respond-to, flex-center, flex-between, flex-column, text-heading, text-label, card-base, opacity-*)
3. ✅ **Mapy** - 3 mapy kolorów ($theme-light, $theme-dark, $theme-midnight) z systemem kolorów dla każdego motywu
4. ✅ **Użycie map** - @mixin apply-theme() generuje CSS dla każdego motywu na podstawie mapy
5. ✅ **Zagnieżdżanie** - Sensowne zagnieżdżanie w `_themes.scss` i modułach SCSS

### ✅ Emotion zawiera

1. ✅ **@emotion/styled** - Używane w `*.styles.ts` dla wszystkich komponentów
2. ✅ **ThemeProvider & Tokeny** - `emotion.d.ts` zawiera interfejsce `ThemeTokens` i obiekt `themes` z trzema motywami
3. ✅ **Global Styles** - Komponent `GlobalStyles.tsx` z `@emotion/react` Global
4. ✅ **Brak plików CSS** - Wszystkie style w TypeScript
5. ✅ **TypeScript Support** - Pełna integracja z Theme typing

---

## 📍 Lokalizacja projektu

```
c:\Users\Bartosz Kebel\Desktop\React\Lista5\theme-showcase\
```

---

## 🚀 Gotowe do oceny!

Projekt zawiera wszystkie wymagane implementacje i przechodzi build bez błędów. ✅
