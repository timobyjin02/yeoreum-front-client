import { Theme } from "@emotion/react";

const palette = {
  background: "#E6E6EE",
  border: "#BAC1D3",
  font: "#32344B",
};

const common = {
  inner: {
    background: "#E6E6EE",
    borderRadius: "15px",
    boxShadow: "inset 5px 5px 10px #a3a3a9, inset -5px -5px 10px #ffffff",
  },
  outer: {
    background: "#E6E6EE",
    borderRadius: "15px",
    boxShadow: "5px 5px 10px #afafb5,-5px -5px 10px #ffffff;",
  },
};

const theme: Theme = {
  palette,
  common,
};

export type PaletteType = typeof palette;
export type CommonType = typeof common;

export default theme;
