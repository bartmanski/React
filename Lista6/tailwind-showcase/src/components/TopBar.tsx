import { themes, type ThemeMode } from '../model'

function TopBar({ theme, onThemeChange }: {
  theme: ThemeMode
  onThemeChange: (t: ThemeMode) => void
}) {
  return (
    <div className="card flex items-center justify-between">
      <h1 className="text-base font-bold m-0">Theme Showcase</h1>
      <select
        className="px-3 py-1.5 rounded border text-sm font-medium cursor-pointer"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          color: 'var(--text-primary)',
          borderColor: 'var(--border-color)',
        }}
        value={theme}
        onChange={(e) => onThemeChange(e.target.value as ThemeMode)}
      >
        {themes.map((t) => (
          <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
        ))}
      </select>
    </div>
  )
}

export default TopBar
