import { useMemo } from "react";

export const ExpensiveComponent = ({ number }: { number: number }) => {
    console.log("Expensive Re rendered")
    const computedValue = useMemo(() => {
        console.log("computed value")
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i * number;
        }
        return result;
    }, [number])
    return (
        <>
            <h2>Expensive Value: {computedValue}</h2>
        </>
    )
}