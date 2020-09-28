import { addExpense, removeExpense, EditExpense } from "../actions/expense";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../actions/filter";
import getVisibleExpenses from "../selectors/expense";
import confiureStore from "../store/configureStore";

console.log("Redux Expensify Running...");

const demoState = {
  expense: [
    {
      id: "unique identifier",
      description: "February Rent",
      note: "This is the pay for the last months rent",
      amount: 54600,
      createDate: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // amount or date
    startDate: undefined,
    endDate: undefined
  }
};

const store = confiureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filter);
  console.log(visibleExpenses);
});

const rent = store.dispatch(
  addExpense({ description: "May Rent", amount: 4000, createDate: 1000 })
);
const taco = store.dispatch(
  addExpense({
    description: "Taco Bell",
    amount: 200,
    note: "Love this crap",
    createDate: -1000
  })
);

// store.dispatch(removeExpense({ id: taco.expense.id }));

const user = {
  name: "Jen",
  age: 24
};

const foo = {
  age: 50
};

// const full = { ...user, location: "Boston", state: "Mass" };
// console.log(full);
// console.log({ ...user, ...foo });

// store.dispatch(editExpense(rent.expense.id, { amount: 2500 }));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(-1001));
// store.dispatch(setEndDate(1001));
// store.dispatch(setTextFilter("Rent"));
console.log(store.getState());
