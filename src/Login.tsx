import { useReducer } from "react"
import { reducer, State } from "./reducer"

export const Login = () => {
    const initialState: State = {
        username: '',
        password: ''
    }
    const [state, dispatch] = useReducer(reducer, initialState)
    const Login = () => {
        console.log(state)
    }
    return (
        <>
            <h2>Login</h2>
            <p>Username: <input onChange={(e) => dispatch({ type: "SET_USERNAME", payload: e.target.value })} /></p>
            <p>Password: <input onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })} /></p>

            <button onClick={Login}>Login</button>

        </>
    )
}