import { ReactElement } from "react";

export type CrossContainerProps = {
  topLeft: ReactElement;
  topRight: ReactElement;
  children: ReactElement;
  aside: ReactElement;
};
