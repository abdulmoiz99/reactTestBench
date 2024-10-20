import { useEffect, useState } from "react";

type User = {
    id: number,
    name: string
}
export const UserList = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchUsers();
    }, [])

    const fetchUsers = async () => {
        setError('')
        setUsers([])
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json()
            console.log(data)
            setUsers(data)
        } catch (error) {
            console.log(error);
            setError('Unable to get users')
        }
    }

    return (
        <>
            {error !== '' ? <h2>{error}</h2> : <></>}
            {users.map((user: User) => (
                <h2>{user.id} - {user.name}</h2>
            ))}
        </>
    )

}