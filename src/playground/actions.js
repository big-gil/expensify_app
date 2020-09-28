export const increment = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy
});

export const decrement = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});

export const reset = () => ({
  type: "RESET"
});

export const setCount = ({ count = 0 } = {}) => ({
  type: "SET",
  count
});
