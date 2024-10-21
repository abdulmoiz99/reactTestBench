import { useRef } from "react"

export const Login = () => {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const login = () => {
        console.log(usernameRef.current?.value)
        console.log(passwordRef.current?.value)
    }
    return (
        <>
            <h2>Login</h2>
            <p>Username: <input ref={usernameRef} /></p>
            <p>Password: <input ref={passwordRef} /></p>
            <button onClick={login}>Login</button>

        </>
    )
}