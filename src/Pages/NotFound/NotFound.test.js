import React from "react";
import { shallow } from "enzyme";
import NotFound from "./NotFound";

describe("NotFound", () => {
  it("should render correctly with no props", () => {
    const wrapper = shallow(<NotFound />);

    expect(wrapper).toMatchSnapshot();
  });
});
