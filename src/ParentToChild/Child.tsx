import React from 'react'

type Props = {
    username: string,
    count: number,
    countries: string[]
    increment: () => void
}

const Child = (props: Props) => {
    const { username, count, countries, increment } = props;
    return (
        <>
            <p>username: {username}</p>
            <p>count: {count}</p>
            {countries.map((c) => <p key={c}>{c}</p>)}
            <button onClick={increment} >Increment</button>
        </>
    )
}

export default Child