import { addExpense, editExpense, removeExpense } from "../../actions/expense";

test("Add Expense Test 1 With Default Input", () => {
  const result = removeExpense({});
  expect(result).toEqual({ type: "REMOVE_EXPENSE" });
});

test("Add Expense Test 2", () => {
  const result = removeExpense({ id: 2 });
  expect(result).toEqual({ type: "REMOVE_EXPENSE", id: 2 });
});

test("Edit Expense Test 1", () => {
  const result = editExpense("123abc", {
    description: "Gas Bill",
    amount: 2500,
    note: "My Note"
  });
  expect(result).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    items: { description: "Gas Bill", amount: 2500, note: "My Note" }
  });
});

test("Add Expense Test 1 With Default", () => {
  const result = addExpense({});
  expect(result).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      amount: 0,
      note: "",
      createDate: 0
    }
  });
});

test("Add Expense Test 2", () => {
  const expenseData = {
    description: "Rent",
    note: "This is last months rent",
    amount: 40000,
    createDate: 1000
  };
  const result = addExpense(expenseData);
  expect(result).toEqual({
    type: "ADD_EXPENSE",
    expense: { id: expect.any(String), ...expenseData }
  });
});
