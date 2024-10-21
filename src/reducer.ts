export type State = {
    username: string
    password: string
}

type Action = {
    type: "SET_USERNAME" | "SET_PASSWORD",
    payload: string
}

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return { ...state, username: action.payload }
        case "SET_PASSWORD":
            return { ...state, password: action.payload }
        default:
            return state;
    }
}