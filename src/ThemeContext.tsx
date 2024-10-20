import { createContext } from "react"

type ContextProps = {
    theme: string,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ContextProps | undefined>(undefined);