import { useState } from 'react'
import './App.css'
import { ExpensiveComponent } from './ExpensiveComponent'

function App() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count: {count}</h2>
      <ExpensiveComponent number={number} />
      <button onClick={() => setCount(count + 1)}>Count +</button>
      <br />
      <br />
      <button onClick={() => setNumber(number + 1)}>Number +</button>
    </>
  )
}

export default App
