import moment from "moment";

export const expenses = [
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
    id: "123abc",
    descripton: "Rent",
    note: "note3",
    amount: 122000,
    createDate: moment(0).add(2, "days").valueOf()
  }
];
