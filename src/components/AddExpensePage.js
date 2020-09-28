import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expense";
import { withRouter } from "react-router-dom";

const AddExpensePage = props => (
  <div>
    <h2>Add Expense</h2>
    <ExpenseForm
      onSubmit={expense => {
        props.dispatch(addExpense(expense));
        props.history.push("/");
      }}
    />
  </div>
);

export default connect()(withRouter(AddExpensePage));
