export type State = {
    count: number;
}

type Action = {
    type: "INCREMENT" | "DECREMENT" | "RESET"
}
export const countReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }
        case "DECREMENT":
            return { count: state.count - 1 }
        case "RESET":
            return { count: 0 }
        default:
            return state;
    }
}