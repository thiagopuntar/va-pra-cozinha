const path = require("path");

module.exports = {
  stories: ["../src/**/stories.mdx", "../src/**/stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@atoms": path.resolve(__dirname, "../src/components/atoms"),
      "@molecules": path.resolve(__dirname, "../src/components/molecules"),
      "@organisms": path.resolve(__dirname, "../src/components/organisms"),
      "@services": path.resolve(__dirname, "../src/services"),
      "@style": path.resolve(__dirname, "../src/style"),
    };
    return config;
  },
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
