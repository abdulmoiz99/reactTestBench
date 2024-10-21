import { useState } from "react"
import Child from "./Child"

export const Parent = () => {
    const [count, setCount] = useState(1);


    return (
        <Child count={count} username="abdul" increment={() => setCount(count + 1)} countries={['USA', 'CA', 'PK']} />
    )
}