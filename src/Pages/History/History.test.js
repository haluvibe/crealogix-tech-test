import React from "react";
import { shallow } from "enzyme";
import History from "./History";

describe("History", () => {
  it("should render correctly with no props", () => {
    const wrapper = shallow(<History />);

    expect(wrapper).toMatchSnapshot();
  });
});
