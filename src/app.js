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

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

const Jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(Jsx, document.getElementById("info"));
