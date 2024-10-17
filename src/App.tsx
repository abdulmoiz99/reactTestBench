import { useEffect, useState } from 'react'
import './App.css'

type User = {
  id: number,
  name: string
}

function App() {
  useEffect(() => {
    fetchUser();
  }, [])

  const [users, setUsers] = useState<User[]>([]);

  const fetchUser = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    console.log(result)
    setUsers(result)
  }


  return (
    <>
      {users.map((user) => (
        <h3 key={user.id}>{user.id}: {user.name}</h3>
      ))}
    </>
  )
}

export default App
