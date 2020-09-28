import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import { expenses } from "../fixtures/expenses";

test("Expense Form Test 1 - Expense Form Render", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("Expense Form Test 2 - Expense Form with Data", () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test("Expense Form Test 3 - Invalid Form submision", () => {
  const expense = { description: "", amount: 0 };
  const wrapper = shallow(<ExpenseForm expense={expense} />);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });
  expect(wrapper.state("error").length).toBeGreaterThanOrEqual(0);
  expect(wrapper).toMatchSnapshot();
});

test("Expense Form Test 4 - Description Changed", () => {
  const value = "new description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(0).simulate("change", {
    target: { value }
  });
  expect(wrapper.state("description")).toBe(value);
});

test("Expense Form Test 5 - Note Changed", () => {
  const value = "A simple note.";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("textarea").simulate("change", {
    target: { value }
  });
  expect(wrapper.state("note")).toBe(value);
});

test("Expense Form Test 6 - Amount Changed", () => {
  const value = "25.40";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", {
    target: { value }
  });
  expect(wrapper.state("amount")).toBe(value);
});

test("Expense Form Test 7 - Amount Changed Invalid", () => {
  const value = "25.5540";
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("input").at(1).simulate("change", {
    target: { value }
  });
  expect(wrapper.state("amount")).toBe("");
});

test("Expense Form Test 8 - On submit prop with valid data", () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(
    <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />
  );

  wrapper.find("form").simulate("submit", {
    preventDefault: () => {}
  });

  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].descripton,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createDate: expenses[0].createDate
  });
});
