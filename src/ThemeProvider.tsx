import { ReactNode, useState } from "react"
import { ThemeContext } from "./ThemeContext"

type Props = {
    children: ReactNode
}

const ThemeProvider = (props: Props) => {

    const { children } = props
    const [theme, setTheme] = useState('light')
    const toggle = () => {
        setTheme(previous => previous === 'light' ? 'dark' : 'light')
    }
    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider