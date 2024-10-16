import { useState } from 'react'
import './App.css'
import { Dashboard } from './Dashboard'
import { UserContext } from './context';

function App() {
  const [username, setUsername] = useState<string>("Test User")
  return (
    <>
      <UserContext.Provider value={{ username, setUsername }}>
        <Dashboard />
      </UserContext.Provider>
    </>
  )
}

export default App
