import React from "react";
import { shallow } from "enzyme";
import { CounterProvider } from "./CounterProvider";

describe("CounterProvider", () => {
  const renderMock = jest.fn();
  it("should invoke the render prop", () => {
    const wrapper = shallow(<CounterProvider render={renderMock} />);

    expect(renderMock).toHaveBeenCalled();
  });
});
