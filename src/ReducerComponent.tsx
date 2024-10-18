// ReducerComponent.tsx

import { useReducer } from "react";
import { countReducer, State } from "./countReducer";

export const ReducerComponent = () => {
    const initialState: State = { count: 0 }

    const [state, dispatch] = useReducer(countReducer, initialState)
    return (
        <>
            <h3>Count: {state.count}</h3>
            <button onClick={() => dispatch({ type: "increment" })} >increment</button>
            <button onClick={() => dispatch({ type: "decrement" })} >decrement</button>
            <button onClick={() => dispatch({ type: "reset" })} >reset</button>
        </>
    );
};
