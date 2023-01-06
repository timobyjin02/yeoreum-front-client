import theme, { PaletteType } from '../styles/theme';

declare module '@emotion/react' {
  export interface Theme {
    palette: PaletteType;
  }
}
