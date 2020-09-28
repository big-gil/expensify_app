import { ExpenseList } from "../../components/ExpenseList";
import { shallow } from "enzyme";
import React from "react";
import { expenses } from "../fixtures/expenses";

test("Expense List Test 1 - Expense List", () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test("Expense List Test 2 - No Expenses To List", () => {
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
