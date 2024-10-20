export type State = {
    count: number
}

type Action = {
    type: "INCREMENT" | "DECREMENT"
}

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 }
        case "DECREMENT":
            return { ...state, count: state.count + 1 }
        default:
            return state;
    }
}