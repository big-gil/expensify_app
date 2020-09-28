import expenseReducer from "../../reducers/expense";
import moment from "moment";
import { expenses } from "../fixtures/expenses";

test("Expense Reducer Test 1 - Initial State", () => {
  const result = expenseReducer(undefined, { type: "@@INIT" });
  expect(result).toEqual([]);
});

test("Expense Reducer Test 2 - Add Expense", () => {
  const expense = {
    id: expect.any(String),
    descripton: "Pizza",
    amount: 3000,
    createDate: moment().valueOf()
  };

  const action = {
    type: "ADD_EXPENSE",
    expense
  };

  const result = expenseReducer(expenses, action);
  expect(result).toEqual([...expenses, action.expense]);
});

test("Expense Reducer Test 3 - Remove Expense", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "123abc"
  };
  const result = expenseReducer(expenses, action);
  expect(result).toEqual([expenses[0], expenses[1]]);
});

test("Expense Reducer Test 4 - Edit Expense", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "123abc",
    items: {
      description: "Cell Phone",
      amount: 52400,
      note: "Galaxy S10",
      createDate: moment().valueOf()
    }
  };
  const result = expenseReducer(expenses, action);

  const merge = { ...expenses[2], ...action.items };
  expect(result).toEqual([expenses[0], expenses[1], merge]);
});
