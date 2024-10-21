import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const Home = () => {
    const context = useContext(ThemeContext)
    const { theme, toggle } = context
    return (
        <>
            <h2>Theme: {theme}</h2>
            <button onClick={toggle} >Toggle</button>
        </>
    )
}