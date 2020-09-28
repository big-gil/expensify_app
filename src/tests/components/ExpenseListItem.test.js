import ExpenseListItem from "../../components/ExpenseListItem";
import { shallow } from "enzyme";
import React from "react";
import { expenses } from "../fixtures/expenses";

test("Expense List Item Test 1 - List Expenses", () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[2]} />);
  expect(wrapper).toMatchSnapshot();
});
