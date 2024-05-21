import React, { useReducer } from "react";
import { Button } from "./style";
// 1 State type
interface State {
  count: number;
}
// 2 Action type
type Action = { type: "increment" } | { type: "decrement" };
// 3 use State type
const initialState: State = { count: 0 };
// 4 use State type and Action type
function reducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  // reducer is a function
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <Button onClick={() => dispatch({ type: "increment" })}>+</Button>
      <Button onClick={() => dispatch({ type: "decrement" })}>-</Button>
    </div>
  );
}

export default Counter;
