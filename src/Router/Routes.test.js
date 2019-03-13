import React from "react";
import { Provider } from "react-redux";
import { mount, shallow } from "enzyme";
import { MemoryRouter } from "react-router-dom";

import store from "../store/store";
import Routes, { ROOT_PATH, HISTORY_PATH } from "./Routes";
import Main from "../Pages/Main/Main";
import History from "../Pages/History/History";
import NotFound from "../Pages/NotFound/NotFound";

const INVALID_PATH = "/invalid";

const setUp = url => {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={[url]}>
        <Routes />
      </MemoryRouter>
    </Provider>
  );
  return wrapper;
};

describe("Routes", () => {
  let wrapper;
  it("should render correctly with no props", () => {
    wrapper = shallow(<Routes />);

    expect(wrapper).toMatchSnapshot();
  });

  test("invalid path should load the Not Found Page", () => {
    wrapper = setUp(INVALID_PATH);
    expect(wrapper.find(Main)).toHaveLength(0);
    expect(wrapper.find(NotFound)).toHaveLength(1);
  });

  test("root path should load only the Main Page Component", () => {
    wrapper = setUp(ROOT_PATH);
    expect(wrapper.find(Main)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });

  test("history path should load only the History Page Component", () => {
    wrapper = setUp(HISTORY_PATH);
    expect(wrapper.find(History)).toHaveLength(1);
    expect(wrapper.find(NotFound)).toHaveLength(0);
  });
});
