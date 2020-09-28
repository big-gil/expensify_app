import React from "react";
import PageNotFound from "../../components/PageNotFound";
import { shallow } from "enzyme";

test("Page Not Found Test 1 - Page Not Found", () => {
  const wrapper = shallow(<PageNotFound />);
  expect(wrapper).toMatchSnapshot();
});
