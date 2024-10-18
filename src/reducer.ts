// reducer.ts
export interface State {
    count: number;
  }
  
  export type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };
  
  export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
      case "increment": return { count: state.count + 1 };
      case "decrement": return { count: state.count - 1 };
      case "reset": return { count: 0 };
      default: return state;
    }
  };
  