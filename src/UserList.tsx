import { useEffect, useState } from "react";

type Users = {
    id: number,
    name: string
}
export const UserList = () => {
    const [users, setUsers] = useState<Users[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchUsers();
    }, [])


    const fetchUsers = async () => {
        try {
            setError('')
            setUsers([])
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setUsers(data)
        } catch (error) {
            console.log(error)
            setError('Unable to get users')
        }
    }

    return (
        <>
            {error !== '' ? <h3>{error}</h3> : null}
            {users.map((user) => (<h4 key={user.id}>{user.id}. {user.name}</h4>))}
        </>
    )
}