import type { Config } from 'tailwindcss';
import { colors, typography, spacing, shadows, radius } from './src/styles/tokens';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors,
      boxShadow: {
        glow: shadows.glow,
        soft: shadows.soft,
        focus: shadows.focus,
        card: shadows.card
      },
      fontFamily: {
        display: typography.fontFamily.display.split(','),
        body: typography.fontFamily.body.split(',')
      },
      spacing,
      borderRadius: radius,
      borderColor: {
        DEFAULT: colors.border,
        highlight: colors.interactive
      },
      textColor: {
        DEFAULT: colors.text,
        muted: colors.muted
      },
      backgroundColor: {
        DEFAULT: colors.background,
        surface: colors.surface,
        panel: colors.panel,
        primary: colors.primary,
        accent: colors.accent,
        highlight: colors.highlight
      }
    }
  },
  plugins: []
};

export default config;
