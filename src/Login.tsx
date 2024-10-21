import { useReducer } from "react";
import { reducer, State } from "./reducer";

export const Login = () => {
    const initialState: State = {
        username: '',
        password: ''
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const logData = () => {
        console.log(state)
    }
    return (
        <>
            <p>Username: <input placeholder="username" onChange={(e) => dispatch({ type: "SET_USERNAME", payload: e.target.value })} /></p>
            <p>Password: <input placeholder="password" onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })} /></p>
            <button onClick={logData}>Show</button>
        </>
    )
}