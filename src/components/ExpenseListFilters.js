import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByDate } from "../actions/filter";

const ExpenseListFilters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      value={props.filters.text}
      onChange={e => {
        {
          e.target.value === "amount" && props.dispatch(sortByAmount());
        }
        {
          e.target.value === "date" && props.dispatch(sortByDate());
        }
      }}
    >
      <option value="date">date</option>
      <option value="amount">amount</option>
    </select>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
