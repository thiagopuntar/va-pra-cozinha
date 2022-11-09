import styled from "styled-components";
import Container from "@atoms/container";
import { breakAt } from "@style/global";
import { CrossContainerProps } from "./types";

const StyledContainer = styled(Container)`
  ${breakAt("md")} {
    display: grid;
    grid-template:
      "topLeft topRight"
      "children aside" auto / 2fr 1fr;
  }
`;

const TopLeft = styled.div`
  text-align: center;
  grid-area: topLeft;
  padding: 1.5em 3em;

  ${breakAt("md")} {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    border-right: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const ChildrenContainer = styled.div`
  grid-area: children;
  ${breakAt("md")} {
    border-right: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const TopRight = styled.div`
  display: none;
  grid-area: topRight;
  padding: 1em;

  ${breakAt("md")} {
    display: flex;
    text-align: center;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const AsideContainer = styled.aside`
  display: none;
  padding: 1em;

  ${breakAt("md")} {
    display: block;
    grid-area: aside;
  }
`;

const CrossContainer = ({
  topLeft,
  topRight,
  children,
  aside,
}: CrossContainerProps) => (
  <StyledContainer>
    <TopLeft>{topLeft}</TopLeft>
    <ChildrenContainer>{children}</ChildrenContainer>
    <TopRight>{topRight}</TopRight>
    <AsideContainer>{aside}</AsideContainer>
  </StyledContainer>
);

export default CrossContainer;
