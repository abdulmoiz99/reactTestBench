import { FormEvent, useReducer } from "react";
import { reducer, State } from "./reducer";

export default function LoginUseState() {

    const initialState: State = {
        username: '',
        password: '',
        error: '',
        loggedIn: false
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (state.username == '123' && state.password == '123') {
                        dispatch({ type: "SET_LOGGED_IN", payload: true })
                        resolve('success');
                    } else {
                        reject('fail');
                    }
                }, 1000);
            })

        } catch (error) {
            console.log(error)
            dispatch({ type: "SET_ERROR", payload: "Incorrect username or password" })
            dispatch({ type: "SET_USERNAME", payload: "" })
            dispatch({ type: "SET_PASSWORD", payload: "" })
        }
    }

    return (
        <>
            <div>
                <div>
                    {state.loggedIn ? (
                        <>
                            <h2>Welcome user: {state.username}</h2>
                        </>
                    ) :
                        (
                            <>
                                <form onSubmit={onSubmit}>
                                    {state.error && <p>{state.error}</p>}
                                    <p>Please Login!</p>
                                    <input
                                        type="text"
                                        placeholder="username"
                                        value={state.username}
                                        onChange={(e) => dispatch({ type: "SET_USERNAME", payload: e.target.value })}
                                    />
                                    <br />
                                    <input
                                        type="password"
                                        placeholder="password"
                                        value={state.password}
                                        onChange={(e) => dispatch({ type: "SET_PASSWORD", payload: e.target.value })}
                                    />
                                    <br />
                                    <br />
                                    <button type="submit">Log In</button>
                                </form>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )

}