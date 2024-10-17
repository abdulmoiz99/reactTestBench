import { useCallback, useState } from 'react'
import './App.css'
import Todo from './Todo';




function App() {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState<string[]>([]);

  const addTodo = useCallback(() => {
    setTodo([...todo, 'new Todo'])
  }, [todo])
  return (
    <>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(previous => previous + 1)}>Update</button>
      <Todo todo={todo} addTodo={addTodo} />
    </>
  )
}

export default App
