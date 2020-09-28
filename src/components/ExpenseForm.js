import React from "react";
import moment from "moment";
// import { SingleDatePicker } from "react-dates";
import { connect } from "react-redux";

const now = moment().valueOf();

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createDate: props.expense ? props.expense.createDate : now,
      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = e => {
    const createDate = e.target.value;
    this.setState(() => ({ createDate }));
  };

  onSubmitForm = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please enter a description and an amount."
      }));
    } else {
      this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: Math.round(parseFloat(this.state.amount, 10) * 100),
        note: this.state.note,
        createDate: this.state.createDate
      });
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <input
            type="number"
            placeholder="Date"
            value={this.state.createDate}
            onChange={this.onDateChange}
          />
          <textarea
            value={this.state.note}
            placeholder="Add a note for your expense (optional)"
            onChange={this.onNoteChange}
          />
          <input type="submit" value="Add Expense" />
        </form>
      </div>
    );
  }
}
