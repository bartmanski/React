import { themes as themeModel } from '../model';
import type { ThemeMode } from '../model';
import { Card } from './styles';
import * as S from './TopBar.styles';

function TopBar({ theme, onThemeChange }: {
  theme: ThemeMode
  onThemeChange: (t: ThemeMode) => void
}) {
  return (
    <Card>
      <S.TopBarContainer>
        <S.AppTitle>Theme Showcase</S.AppTitle>
        <S.ThemeSelect
          value={theme}
          onChange={(e) => onThemeChange(e.target.value as ThemeMode)}
        >
          {themeModel.map((t) => (
            <option key={t} value={t}>
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </option>
          ))}
        </S.ThemeSelect>
      </S.TopBarContainer>
    </Card>
  )
}

export default TopBar
