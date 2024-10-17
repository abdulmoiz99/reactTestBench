import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const previousState = useRef<number>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    previousState.current = count
  }, [count])

  const updateCount = () => {
    setCount(count + 1)
  }
  return (
    <>
      <h3>Count: {count}</h3>
      <h3>Previous Count: {previousState.current}</h3>
      <button onClick={updateCount}>Update</button>
    </>
  )
}

export default App
