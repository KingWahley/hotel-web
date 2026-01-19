import { theme, DefaultTheme } from '@chakra-ui/core'

const breakpoints = [
  "360px",   // mobile
  "768px",   // tablet
  "1024px",  // small laptop
  "1280px",  // standard laptop ✅
  "1440px"   // large desktop
];

// breakpoints.sm = breakpoints[0];
// breakpoints.md = breakpoints[1];
// breakpoints.lg = breakpoints[2];
// breakpoints.xl = breakpoints[3];

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: "Mukta, sans-serif",
    heading: "Mukta, sans-serif",
    mono: "Mukta, sans-serif",
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 400,
    medium: 500,
    bold: 700,
    extrabold: 800
  },
  radii: {
    ...theme.radii,
    sm: '4px',
  },
  fontSizes: {
    ...theme.fontSizes,
    '5xl': '40px',
    '6xl': '60px'
  },
  colors: {
    ...theme.colors,
    orange: {
      ...theme.colors.orange,
      500: "#000000"
    }
  },
  breakpoints
}

export default customTheme