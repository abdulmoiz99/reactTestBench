// App.tsx
import { useReducer } from 'react';
import './App.css';
import { ReducerComponent } from './ReducerComponent';
import { reducer, State } from './reducer';

function App() {
  const initialState: State = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <br /><br />
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <br /><br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <ReducerComponent />
    </>
  );
}

export default App;
