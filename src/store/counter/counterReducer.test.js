import counterReducer, { initialState } from "./counterReducer";
import * as actions from "./counterActionCreators";
import expect from "expect";

describe("counter reducer", () => {
  it("should return the initial state", () => {
    const action = { type: "dummy_action" };
    expect(counterReducer(undefined, action)).toEqual(initialState);
  });

  it("should handle INCREMENT_COUNTER", () => {
    const action = actions.incrementCounter();
    const expectedState = { count: 1, history: [0, 1] };

    expect(counterReducer(undefined, action)).toEqual(expectedState);
  });

  it("should handle INCREMENT_COUNTER and not return a count higher than 10", () => {
    const action = actions.incrementCounter();
    const mockState = {
      count: 10,
      history: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };

    expect(counterReducer(mockState, action)).toEqual(mockState);
  });

  it("should handle DECREMENT_COUNTER and return the initial state if count = 0", () => {
    const action = actions.decrementCounter();
    expect(counterReducer(undefined, action)).toEqual(initialState);
  });

  it("should handle DECREMENT_COUNTER and decrement the count if it is above 0", () => {
    const action = actions.decrementCounter();
    const mockState = { count: 1, history: [0, 1] };
    const expectedState = { count: 0, history: [0, 1, 0] };

    expect(counterReducer(mockState, action)).toEqual(expectedState);
  });
});
