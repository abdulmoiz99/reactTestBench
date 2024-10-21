import { useMemo } from "react";

export const ExpensiveComponent = ({ number }: { number: number }) => {

    const computedValue = useMemo(() => {
        console.log("Expensive calculation")
        let result = 0;
        for (let i = 0; i < 1000; i++) {
            result += i * number;
        }
        return result;
    }, [number])

    return (
        <>
            <h3>Expensive Value: {computedValue} </h3>
        </>
    )
}