import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";

const mockTitle = "mock title";

describe("Header", () => {
  it("renders without errors when given a title prop", () => {
    const wrapper = shallow(<Header title={mockTitle} />);
    expect(wrapper.find("h1.title").text()).toEqual(mockTitle);
    expect(wrapper).toMatchSnapshot();
  });
});
