type PropsType = {
    message: string
}
export const Greetings = (props: PropsType) => {
    const {message} = props
    return (
        <>
            <h1>{message}</h1>
        </>
    )
}