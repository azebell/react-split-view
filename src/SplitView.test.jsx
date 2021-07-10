// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import SplitView from "./SplitView";

describe("Split View", () => {
  let props;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<SplitView {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("split-view");

    expect(component).toHaveTextContent("sample text");
  });
});
