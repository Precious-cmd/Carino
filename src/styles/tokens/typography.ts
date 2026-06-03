export const typography = {
  fontFamily: {
    display: ['Inter', 'system-ui', 'sans-serif'].join(','),
    body: ['Inter', 'system-ui', 'sans-serif'].join(',')
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800
  },
  letterSpacing: {
    normal: '0em',
    wide: '0.02em',
    wider: '0.08em'
  },
  lineHeight: {
    tight: '1.1',
    normal: '1.55',
    relaxed: '1.8'
  },
  fontSize: {
    display: ['5rem', { lineHeight: '1.03', letterSpacing: '-0.03em' }],
    heading: ['3.5rem', { lineHeight: '1.04', letterSpacing: '-0.02em' }],
    title: ['2.25rem', { lineHeight: '1.05' }],
    section: ['1.5rem', { lineHeight: '1.3' }],
    body: ['1rem', { lineHeight: '1.8' }],
    caption: ['0.875rem', { lineHeight: '1.7' }]
  }
};
