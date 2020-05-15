// Generated with util/create-component.js
import React from "react";
import { ThemeProvider } from "styled-components";

import { ThemeProps } from "./Theme.types";

import "./Theme.scss";

const Theme: React.FC<ThemeProps> = props => {
  const { children, theme } = props;
  return (
    <ThemeProvider theme={theme} data-testid="Theme">
      {children}
    </ThemeProvider>
  );
};

export default Theme;
