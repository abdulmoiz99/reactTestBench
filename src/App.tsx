import { useState } from 'react'
import './App.css'
import { Greetings } from './Greetings'

function App() {
  const [message, setMessage] = useState("Hello Abdul Moiz")

  return (
    <>
      <Greetings message={message} />
      <button onClick={() => setMessage("Hello From the Button")}> Update</button>
    </>
  )
}

export default App
