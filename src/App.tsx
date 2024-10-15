import { useCallback, useState } from "react"
import Search from "./Search";

const allUser: string[] = [
  "Abdul",
  "Moiz",
  "Nick",
  "Alex",
]
function shuffle(array: string[]) {
  const arrayToShuffle: string[] = [...array];
  for (let i = arrayToShuffle.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arrayToShuffle[i], arrayToShuffle[j]] = [arrayToShuffle[j], arrayToShuffle[i]];
  }
  return arrayToShuffle;
}
export default function App() {
  const [users, setUsers] = useState(allUser);

  const handleSearch = useCallback((text: string) => {
    console.log(users[0])
    const filterUsers = users.filter((user) => user.includes(text));
    setUsers(filterUsers);
  }, [users])

  return (
    <>
      <div className="align-center mb-2 flex ">
        <button onClick={() => setUsers(shuffle(users))} >Shuffle</button>
        <Search onChange={handleSearch} />
      </div>

      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </>
  )
}