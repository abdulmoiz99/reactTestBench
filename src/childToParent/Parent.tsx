import { Child } from "./Child"

export const Parent = () => {
    const handleChildData = (data: number) => {
        console.log("Data received from child: ", data)
        return data;
    }
    return (
        <>
            <h2>Got Data From Child: </h2>
            <Child data={handleChildData} />
        </>
    )
}