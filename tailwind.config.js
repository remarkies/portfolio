module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      highlight: 'var(--highlight)',
      accentBackground: 'var(--accent-background)',
      accent: 'var(--accent)',
      white: 'white'
    },
    extend: {
      maxWidth: {
        'xxs': '220px'
      },
      gridRow: {
        '1': '1',
        '2': '2',
        '1/7': '1 / 7',
        '2/8': '2 / 8'
      },
      gridColumn: {
        '1': '1',
        '2': '2'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
