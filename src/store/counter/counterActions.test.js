import * as actions from "./counterActionCreators";
import * as types from "./CounterActionTypes";

describe("actions", () => {
  it("should create an action to increment the counter", () => {
    const expectedAction = {
      type: types.INCREMENT
    };
    expect(actions.incrementCounter()).toEqual(expectedAction);
  });

  it("should create an action to decrement the counter", () => {
    const expectedAction = {
      type: types.DECREMENT
    };
    expect(actions.decrementCounter()).toEqual(expectedAction);
  });
});
