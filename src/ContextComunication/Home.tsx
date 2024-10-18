import { useContext } from "react"
import ThemeContext from "./Context"

export const Home = () => {
    const context = useContext(ThemeContext)
    const { theme, toggleTheme } = context;
    return (
        <>
            <h2>Home: {theme}</h2>
            <button onClick={toggleTheme} >Change Theme</button >
        </>
    )
}