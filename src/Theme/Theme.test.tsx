// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Theme from "./Theme";
import { ThemeProps } from "./Theme.types";

describe("Test Component", () => {
  let props: ThemeProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<Theme {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Theme");

    expect(component).toHaveTextContent("harvey was here");
  });
});
