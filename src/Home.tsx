import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"


const Home = () => {
    const context = useContext(ThemeContext);
    const { theme, toggle } = context
    return (
        <>
            <h2>Theme: {theme}</h2>
            <button onClick={toggle} >Change theme</button>
        </>
    )
}

export default Home