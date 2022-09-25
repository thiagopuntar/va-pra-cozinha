const SPACING_BASE = 8;

const theme = {
  colors: {
    primary: "#c2bdaa",
    black: "#161616",
    white: "#FFFFFF",
  },
  fonts: {
    family: {
      body: "Arial",
      title: "Times New Roman",
    },
  },
  spacing: (level = 1) => `${level * SPACING_BASE}px`,
};

export default theme;
