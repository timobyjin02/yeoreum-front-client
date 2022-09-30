import "@emotion/react";
import theme, { PaletteType, CommonType } from "./theme";

declare module "@emotion/react" {
  export interface Theme {
    palette: PaletteType;
    common: CommonType;
  }
}
