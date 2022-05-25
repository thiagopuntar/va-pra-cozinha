import type { NextPage } from "next";
import { GlobalStyle } from "../style/global";
import { ThemeProvider } from "styled-components";
import { theme } from "../style/theme";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello world!</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Home;
