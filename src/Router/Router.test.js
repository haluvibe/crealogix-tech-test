import React from "react";
import { shallow } from "enzyme";
import Router from "./Router";

describe("Router", () => {
  it("should render correctly with no props", () => {
    const wrapper = shallow(<Router />);

    expect(wrapper).toMatchSnapshot();
  });
  it("should render the Routes component", () => {
    const wrapper = shallow(<Router />);

    expect(wrapper.find("Routes")).toBeTruthy();
  });
});
