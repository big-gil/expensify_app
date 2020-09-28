import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

import configureStore from "./store/configureStore";
import { addExpense, removeExpense, EditExpense } from "./actions/expense";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "./actions/filter";
import getVisibleExpenses from "./selectors/expense";
import moment from "moment";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water Bill",
    amount: 7200,
    createDate: moment().add(7, "days").valueOf()
  })
);

store.dispatch(
  addExpense({
    description: "Gas Bill",
    amount: 10400,
    createDate: moment().add(1, "days").valueOf()
  })
);
store.dispatch(
  addExpense({
    description: "Rent",
    amount: 600000,
    createDate: moment().add(4, "days").valueOf()
  })
);

// store.subscribe(() => {
const state = store.getState();
console.log(state);
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
// });

// store.dispatch(setTextFilter("gas"));

// setTimeout(() => {
//   store.dispatch(setTextFilter("bill"));
// }, 3000);

const Jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(Jsx, document.getElementById("info"));
