export type State = {
  username: string,
  password: string,
  error: string,
  loggedIn: boolean
}
type Action = {
  type: "SET_USERNAME" | "SET_PASSWORD" | "SET_LOGGED_IN" | "SET_ERROR",
  payload: string | boolean | any
} 


export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload }
    case "SET_PASSWORD":
      return { ...state, password: action.payload }
    case "SET_LOGGED_IN":
      return { ...state, loggedIn: action.payload }
    case "SET_ERROR":
      return { ...state, error: action.payload }
    default:
      return state;
  }

}