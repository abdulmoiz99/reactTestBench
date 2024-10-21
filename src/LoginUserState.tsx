import { useReducer } from "react"
import { countReducer, State } from "./CountReducer"

export const LoginUserState = () => {

    const initialState: State = {
        username: '',
        password: ''
    }
    const [state, dispatch] = useReducer(countReducer, initialState)

    const login = () => {
        console.log(state.username)
        console.log(state.password)
    }
    return (
        <>
            <p>Username: <input onChange={(e) => { dispatch({ type: "SET_USERNAME", payload: e.target.value }) }} /></p>
            <p>Password: <input onChange={(e) => { dispatch({ type: "SET_PASSWORD", payload: e.target.value }) }} /></p>
            <button onClick={login}>Login</button>
        </>
    )
}
