export type State = {
    count: number
}

type Action = {
    type: "INCREMENT" | "DECREMENT"
}

export const reducer = (state: State, action: Action) => {
    console.log(state)
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 }
        case "DECREMENT":
            return { count: state.count - 1 }
        default:
            return state;
    }
}