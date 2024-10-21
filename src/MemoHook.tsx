import { useState } from "react"
import { ExpensiveComponent } from "./ExpensiveComponent"

const MemoHook = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)


    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={() => setNumber(number + 1)}>Increase Number</button>
            <br />
            <br />
            <button onClick={() => setCount(count + 1)}>Increase Count</button>
            <ExpensiveComponent number={number} />

        </>
    )
}

export default MemoHook