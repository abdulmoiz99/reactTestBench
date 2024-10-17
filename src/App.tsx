import { useEffect, useState } from 'react'
import './App.css'

type User = {
  id: number,
  name: string
}

function App() {
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(previous => previous + 1)
    }, 1000)

    return () => { clearInterval(timer) }
  }, [])
  const [seconds, setSeconds] = useState(0);

  return (
    <>
      <h1>Time: {seconds} seconds</h1>
    </>
  )
}

export default App
