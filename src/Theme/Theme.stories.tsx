// Generated with util/create-component.js
import React from "react";
import Theme from "./Theme";
import Button from "../Button/Button";

export default {
  title: "Theme"
};

const theme = {
  primary: "red"
};

export const WithBar = () => (
  <Theme theme={theme}>
    <Button>Provide Me Color</Button>
  </Theme>
);
