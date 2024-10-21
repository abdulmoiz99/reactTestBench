import { useReducer } from "react";
import { reducer, State } from "./reducer";

export const Count = () => {
    const initialState: State = {
        count: 1
    }
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <h1>Count: {state.count}</h1>
            <button onClick={() => { dispatch({ type: "INCREMENT" }) }} >Increment</button>
            <button onClick={() => { dispatch({ type: "INCREMENT" }) }} >Increment</button>

        </>
    )
}