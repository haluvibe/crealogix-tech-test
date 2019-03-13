import React from "react";
import { shallow } from "enzyme";
import Main from "./Main";

describe("Main", () => {
  it("should render correctly with no props", () => {
    const wrapper = shallow(<Main />);

    expect(wrapper).toMatchSnapshot();
  });
});
