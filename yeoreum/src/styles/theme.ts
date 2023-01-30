const palette = {
  // 삭제 예정
  serviceBtn: '#4CAF50',
  fontGrey: '#555',
  fontBlack: '#181818',
  grey: '#dbdbdb',
  lightGrey: '#f5f6f7',

  main: '#4CAF50',
  dark: '#357A38',
  light: '#80C883',
  disable: '#B8E0B9',
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
