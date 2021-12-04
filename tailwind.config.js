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
      accent: 'var(--accent)'
    },
    extend: {
      maxWidth: {
        'xxs': '220px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
