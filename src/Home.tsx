import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const Home = () => {
    const context = useContext(ThemeContext);
    const { theme, toggleTheme } = context;
    return (
        <>
            <h2>{theme}</h2>
            <button onClick={toggleTheme}>Toggle</button>
        </>
    )
}