import { useMemo } from "react";

export default function ExpensiveComponent({ num }: { num: number }) {
    // Memoize the result of the expensive calculation
    const computedValue = useMemo(() => {
        console.log('Expensive calculation running...');
        // Simulate an expensive calculation
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += i * num;
        }
        return result;
    }, [num])
    return (
        <div>Expensive value: {computedValue}</div>
    );
}