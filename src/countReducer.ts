
export interface State {
    count: number
}
type Action = {
    type: "increment" | "decrement" | "reset"
}
export const countReducer = (state: State, action: Action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 }
        case "decrement":
            return { count: state.count - 1 }
        case "reset":
            return { count: 0 }

        default:
            return state;
    }
}