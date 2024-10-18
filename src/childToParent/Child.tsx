import { useState } from "react"

type Props = {
    data: (arg0: number) => number
}
export const Child = (props: Props) => {
    const { data } = props
    const [count, setCount] = useState<number>(0);
    return (
        <>
            <h2>Child</h2>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => data(count)}>Parent</button>
        </>
    )
}