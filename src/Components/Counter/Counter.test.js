import React from "react";
import { shallow } from "enzyme";
import Counter from "./Counter";

const handleIncrementCounter = jest.fn();
const handleDecrementCounter = jest.fn();
const count = 0;

const mockProps = {
  handleIncrementCounter,
  handleDecrementCounter,
  count
};

const setUp = (props = mockProps) => {
  const wrapper = shallow(<Counter {...props} />);
  return wrapper;
};

describe("Counter", () => {
  describe("When count prop equals 0", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    it("should render correctly without errors", () => {
      expect(wrapper).toMatchSnapshot();
    });

    it("includes the Header component", () => {
      expect(wrapper.find("Header").props()).toEqual({
        title: "Counter"
      });
    });

    it("includes a div with text and the counter prop value", () => {
      expect(wrapper.find("div.current-count").text()).toEqual(
        "Current Count: 0"
      );
    });

    it("includes only the increment button", () => {
      expect(wrapper.find("Button").props()).toEqual({
        value: "Increment Counter",
        handleClick: handleIncrementCounter
      });
      expect(wrapper.find("Button").length).toEqual(1);
    });
  });

  describe("When count prop equals 10", () => {
    let wrapper;
    beforeEach(() => {
      mockProps.count = 10;
      wrapper = setUp(mockProps);
    });

    it("includes a div with text and the counter prop value", () => {
      expect(wrapper.find("div.current-count").text()).toEqual(
        "Current Count: 10"
      );
    });

    it("includes only the decrement button", () => {
      expect(wrapper.find("Button").props()).toEqual({
        value: "Decrement Counter",
        handleClick: handleDecrementCounter
      });
      expect(wrapper.find("Button").length).toEqual(1);
    });
  });
});
