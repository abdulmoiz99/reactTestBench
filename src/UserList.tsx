import { useEffect, useState } from "react"

type User = {
    id: number,
    name: string
}

export const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('')

    useEffect(() => {
        fetchUsers()
    }, [])
    const fetchUsers = async () => {
        try {
            setUsers([]);
            setError('')
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.log(error)
            setError('Unable to fetch users data')
        }
    }
    return (
        <>
            <h1>Users</h1>
            {error !== '' ? <h2>{error}</h2> : null}
            {users.map((user) => (
                <h2>
                    {user.id}. {user.name}
                </h2>
            ))}
        </>
    )
}