import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from "../../actions/filter";
import moment from "moment";

test("Set Filter Text Test 1 With Default", () => {
  const result = setTextFilter();
  expect(result).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("Set Filter Text Test 2 ", () => {
  const text = "A test string";
  const result = setTextFilter(text);
  expect(result).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

test("Sort By Amount Test ", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT"
  });
});

test("Sort By Date Test ", () => {
  const result = sortByDate();
  expect(result).toEqual({
    type: "SORT_BY_DATE"
  });
});

test("Set Start Date Test ", () => {
  const result = setStartDate(moment(0));
  expect(result).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  });
});

test("Set End Date Test ", () => {
  const result = setEndDate(moment(0));
  expect(result).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  });
});
