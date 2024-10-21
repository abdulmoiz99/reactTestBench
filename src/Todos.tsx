import { memo } from "react";

function Todos({ todos, addTodos }: { todos: string[], addTodos: () => void }) {
    console.log('Inside Todos');
    return (
        <>
            <ul>
                {todos.map((todo, index) => <li key={index}>{todo}</li>)}
            </ul>
            <button onClick={addTodos}>Add Todo</button>
        </>
    );
}

export default memo(Todos)
