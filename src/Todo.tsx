import { memo } from "react";

type PropsType = {
    todo: string[]
    addTodo: () => void
}
const Todo = (props: PropsType) => {
    const { todo, addTodo } = props;
    console.log("Inside Todo")
    return (
        <>
            <h3>Todo List</h3>
            <ul>
                {todo?.map((t) => <li>{t}</li>)}
            </ul>
            <button onClick={addTodo} >Add Todo</button>
        </>
    )
}

export default memo(Todo);