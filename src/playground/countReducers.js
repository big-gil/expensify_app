const reducers = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };

    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };

    case "RESET":
      return {
        count: 0
      };

    case "SET":
      return {
        count: action.count
      };

    default:
      return state;
  }
};

export default reducers;
