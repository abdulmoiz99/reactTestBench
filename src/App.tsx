import { ChangeEvent, FormEvent, useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({ username: "", password: "" })

  const submitForm = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <p>Username:
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </p>
        <p>Password:
          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </p>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
