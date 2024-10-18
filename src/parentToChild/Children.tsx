import React from "react"

type Props = {
    children: React.ReactNode
}

export const Children = (props: Props) => {
    const {children} = props
    return (
        <>
            <h1>Children</h1>
            {children}
        </>
    )
}