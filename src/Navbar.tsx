import { useUserContext } from "./context";

const Navbar = () => {
    const { username, setUsername} = useUserContext();
    return (
        <>
            <div>Navbar {username}</div>
            <br />
            <button onClick={() => setUsername('From Navbar')}>Update Navbar</button>
        </>
    )
}

export default Navbar