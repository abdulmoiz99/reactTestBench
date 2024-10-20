import { createContext } from "react"

type ContextProps = {
    theme: string,
    toggle: () => void
}

export const ThemeContext = createContext<ContextProps | undefined>(undefined);