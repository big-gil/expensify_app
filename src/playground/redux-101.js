import { createStore } from "redux";
import { increment, decrement, reset, setCount } from "./actions";
import reducer from "./countReducers";

console.log("Rex is running...");

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
});

// Dispatch
store.dispatch(increment());
store.dispatch(decrement({ decrementBy: 2 }));

store.dispatch(reset());

store.dispatch(setCount({ count: 100 }));

// store.dispatch({
//   type: "DECREMENT",
//   payload: 2
// });

// store.dispatch({
//   type: "DECREMENT"
// });
