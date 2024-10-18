import { Home } from "./Home"
import { ThemeProvider } from "./ThemeProvider"

export const Parent = () => {
    return (
        <>
            <ThemeProvider>
                <Home />
            </ThemeProvider>
        </>
    )
}