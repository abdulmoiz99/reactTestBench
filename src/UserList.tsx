import { useEffect, useState } from "react"

type Users = {
    id: number,
    name: string
}
const UserList = () => {
    const [users, setUsers] = useState<Users[]>([])
    const [error, setError] = useState('');

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {

        try {
            setUsers([])
            setError('')

            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            setError('Unable to fetch data')
            console.log(error);
        }
    }

    return (
        <>
            <h3>Users</h3>
            {error !== '' ? <h2>{error}</h2> : null}
            {users.map((user: Users) => (
                <h5>{user.id}. {user.name}</h5>
            ))}
        </>
    )
}

export default UserList