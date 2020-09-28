import filterReducer from "../../reducers/filter";
import moment from "moment";
import { sortByAmount } from "../../actions/filter";

const filterState = {
  text: undefined,
  sortBy: "date",
  stateDate: moment(0).startOf("month"),
  endDate: moment(0).endOf("month")
};

test("Filter Test 1 - Set Text", () => {
  const action = {
    type: "SET_TEXT_FILTER",
    text: "Bill"
  };
  const result = filterReducer(filterState, action);
  expect(result).toEqual({ ...filterState, text: action.text });
});

test("Filter Test 2 - Sort By Amount", () => {
  const action = {
    type: "SORT_BY_AMOUNT"
  };

  const result = filterReducer(filterState, action);
  expect(result).toEqual({ ...filterState, sortBy: "amount" });
});

test("Filter Test 3 - Sort By Date", () => {
  const action = {
    type: "SORT_BY_DATE"
  };

  const result = filterReducer(undefined, action);

  // use a bit of short hand
  expect(result.sortBy).toBe("date");
});

test("Filter Test 4 - Set Start Date", () => {
  const action = {
    type: "SET_START_DATE",
    startDate: moment().valueOf()
  };

  const result = filterReducer(filterState, action);
  expect(result).toEqual({ ...filterState, startDate: action.startDate });
});

test("Filter Test 5 - Set End Date", () => {
  const action = {
    type: "SET_END_DATE",
    endDate: moment().valueOf()
  };

  const result = filterReducer(filterState, action);
  expect(result).toEqual({ ...filterState, endDate: action.endDate });
});
