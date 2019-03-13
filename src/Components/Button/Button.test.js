import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

const handleClick = jest.fn();
const value = "Mock Value";

const mockProps = {
  handleClick,
  value
};

const setUp = (props = mockProps) => {
  const wrapper = shallow(<Button {...props} />);
  return wrapper;
};

describe("Button", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("should render correctly without errors", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Should include the text Mock Value", () => {
    expect(wrapper.text()).toEqual(value);
  });

  it("button is clickable and invokes the handleClick prop", () => {
    wrapper.find("button").simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });
});
