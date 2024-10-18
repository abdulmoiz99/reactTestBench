import { Children } from "./children"

export const Parent = () => {
    return (
        <>
            <h1>Parent</h1>
            <Children>
                <h5>Got From Parent, How Cool Right?</h5>
            </Children>
        </>
    )
}