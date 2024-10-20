import { ReactNode, useState } from "react"
import { ThemeContext } from "./ThemeContext"

type Props = {
    children: ReactNode
}
export const ThemeProvider = (props: Props) => {
    const { children } = props;
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(previous => previous === 'light' ? 'dark' : 'light')
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}