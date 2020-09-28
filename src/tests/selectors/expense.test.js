import selectExpenses from "../../selectors/expense";
import moment from "moment";

const expenses = [
  {
    id: expect.any(String),
    descripton: "Water Bill",
    note: "note1",
    amount: 14500,
    createDate: moment(0).add(7, "days").valueOf()
  },
  {
    id: expect.any(String),
    descripton: "Gas Bill",
    note: "note2",
    amount: 500000,
    createDate: moment(0).subtract(3, "days").valueOf()
  },
  {
    id: expect.any(String),
    descripton: "Rent",
    note: "note3",
    amount: 122000,
    createDate: moment(0).add(2, "days").valueOf()
  }
];

test("Select Test 1, sort by date", () => {
  const filter = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filter);
  expect(result).toEqual([expenses[0], expenses[2], expenses[1]]);
});

test("Select Test 2, sort by amount", () => {
  const filter = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filter);
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});

test("Select Test 3, select by date range", () => {
  const filter = {
    text: "",
    sortBy: "date",
    startDate: moment(0).add(0, "days").valueOf(),
    endDate: moment(0).add(3, "days").valueOf()
  };

  const result = selectExpenses(expenses, filter);
  expect(result).toEqual([expenses[2], expenses[1]]);
});
