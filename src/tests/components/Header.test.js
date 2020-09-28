import { shallow } from "enzyme";
import Header from "../../components/Header";
import React from "react";

test("Component Test 1 - Header", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
