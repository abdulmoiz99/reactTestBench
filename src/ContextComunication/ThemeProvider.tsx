import { Children, ReactNode, useState } from "react";
import ThemeContext from "./Context";

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <>
            <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}