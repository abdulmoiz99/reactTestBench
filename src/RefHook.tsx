import { useRef } from "react"

export const RefHook = () => {
    const ref = useRef<HTMLInputElement>(null)
    const updateValue = () => {
        ref.current!.value += "1";
    }
    return (
        <>
            <h2>Ref Hook {ref.current?.value}</h2>
            <input placeholder="Hello" ref={ref}></input>
            <br />
            <br />
            <button onClick={updateValue}>Update</button>
        </>
    )
}