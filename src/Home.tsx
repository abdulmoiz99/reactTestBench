import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'


const Home = () => {
    const context = useContext(ThemeContext);
    const { theme, toggle } = context
    return (
        <>
            <h1>Theme: {theme}</h1>
            <button onClick={toggle}>Toggle</button>
        </>
    )
}

export default Home