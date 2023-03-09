const palette = {
  main: '#4D49FE',
  dark: '#3E3BCB',
  light: '#DBDBFF',
  disable: '#DBDBFF',
  sub: '#4E342E',
  font: {
    headline: '#191919',
    subHeadline: '#505050',
    body: ' #767676',
    disable: '#999999',
    white: '#FFFFFF',
  },
  background: {
    light: '#F7F7FB',
    grey: '#F1F1F5',
    white: '#FFFFFF',
  },
  line: {
    light: '#F0F0F6',
    grey: '#E5E5EC',
    black: '#191919',
    white: '#FFFFFF',
  },
};

const button = {
  radius: '8px',
};

export type PaletteType = typeof palette;

const theme = {
  palette,
  button,
};

export default theme;
