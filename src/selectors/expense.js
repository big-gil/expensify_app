import moment from "moment";

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createDateMoment = moment(expense.createDate);
      const startDateMatch = startDate
        ? moment(startDate).isSameOrBefore(createDateMoment, "day")
        : true;
      const endDateMatch = endDate
        ? moment(endDate).isSameOrAfter(createDateMoment, "day")
        : true;
      let textMatch = true;

      // Does the expense description contain the text string
      if (text) {
        const desc = expense.description;
        if (!desc.toLowerCase().includes(text.toLowerCase())) {
          textMatch = false;
        }
      }

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        // Sort By Creatation Date
        return a.createDate < b.createDate ? 1 : -1;
      } else if (sortBy === "amount") {
        // Sort By Dollar Amount
        return a.mount < b.amount ? 1 : -1;
      }
    });
};
