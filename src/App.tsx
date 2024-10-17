import { FormEvent, useRef } from 'react'
import './App.css'

function App() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log(usernameRef.current?.value)
    console.log(passwordRef.current?.value)

  }
  return (
    <>
      <form onSubmit={submitForm}>
        <p>Username:
          <input ref={usernameRef} />
        </p>
        <p>Password:
          <input ref={passwordRef} />
        </p>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
