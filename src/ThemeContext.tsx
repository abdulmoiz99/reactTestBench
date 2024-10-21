import { createContext } from "react"

export type ContextProps = {
    theme: string,
    toggle: () => void
}

export const ThemeContext = createContext<ContextProps | undefined>(undefined);