import { createGlobalStyle } from "styled-components";

const breakpoints = {
  md: "900px",
  lg: "1200px",
};

export const breakAt = (breakpoint: keyof typeof breakpoints) =>
  `@media screen and (min-width: ${breakpoints[breakpoint]})`;

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.family.body};
    color: ${(props) => props.theme.colors.black};
    background-color: ${(props) => props.theme.colors.white};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.family.title};
  }

  html {
    @media (min-width: ${() => breakpoints.md}) {
      font-size: 87.5%;
    }

    @media (min-width: ${() => breakpoints.lg}) {
      font-size: 93.75%;
    }
  }
`;
