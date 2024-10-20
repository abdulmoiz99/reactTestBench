import { useCallback, useState } from "react";
import Todos from "./Todos";

export default function CallbackHook() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState<string[]>([]);

    const addTodos = useCallback(() => {
        setTodos([...todos, 'new Todo' + count]);
    }, [todos])

    return (
        <div>
            <div>
                {count}
                <button onClick={() => setCount(prev => prev + 1)}>+1</button>
            </div>
            <Todos todos={todos} addTodos={addTodos} />
        </div>
    );
}