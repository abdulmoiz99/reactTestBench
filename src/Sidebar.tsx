import { useUserContext } from "./context";

const Sidebar = () => {
    const { username, setUsername } = useUserContext();

    return (
        <>
            <div>Sidebar {username}</div>
            <br />
            <button onClick={() => setUsername('From Sidebar')}>Update Sidebar</button>
        </>
    )
}

export default Sidebar