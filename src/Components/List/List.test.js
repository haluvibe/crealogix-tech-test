import React from "react";
import { shallow } from "enzyme";
import List from "./List";

const history = [0, 1, 2];

const mockProps = {
  history
};

const mockUuidKey = "00000000-0000-0000-0000-000000000000";

jest.mock("uuid/v4", () => () => mockUuidKey);

const setUp = (props = mockProps) => {
  const wrapper = shallow(<List {...props} />);
  return wrapper;
};

describe("List", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render correctly with mock props", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("includes the Header component", () => {
    expect(wrapper.find("Header").props()).toEqual({
      title: "Counter History"
    });
  });

  it("renders list items mapped from props correctly", () => {
    const texts = wrapper.find("ul").map(node => node.text());
    expect(texts).toEqual(["012"]);
    expect(wrapper.find("ul").exists()).toEqual(true);
    expect(wrapper.find("li").length).toBe(3);
  });
});
