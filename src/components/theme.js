export const theme = {
  colors: {
    white: '#FFFFFF',
    primary: '#663399',
    text: '#2a2a2a',
    secondary: '#DAA520',
    bg: '#E6EBE3',
  },

  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'Georgia, serif',
  },

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],

  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },

  caps: {
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
  },

  buttons: {
    primary: {
      // you can reference other values defined in the theme
      color: '#F1F2F9',
      bg: '#2E355D',
    },
    secondary: {
      color: '#0B0C0B ',
      bg: '#4EDC2E',
    },
  },

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  sizes: {
    w: { wide: '100%', med: '50%', narrow: '25%' },
    h: { min: '100px', med: '150px', max: '200px' },
  },

  borders: {
    none: 'none',
    normal: '1px solid',
  },

  radii: {
    min: '4px',
    med: '8px',
  },
};
