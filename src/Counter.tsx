import { useReducer } from "react"
import { countReducer, State } from "./CountReducer"

const Counter = () => {
    const initialState: State = {
        count: 0
    }

    const [state, dispatch] = useReducer(countReducer, initialState)


    return (
        <>
            <h2>Count: {state.count}</h2>
            <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>+</button>
            {' '}
            <button onClick={() => { dispatch({ type: "DECREMENT" }) }}>-</button>
            {' '}
            <button onClick={() => { dispatch({ type: "RESET" }) }}>0</button>
        </>
    )
}

export default Counter