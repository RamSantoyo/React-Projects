import { createContext, useContext, useState } from "react";

const CounterContext = createContext(null);

const Counter = () => {
  const { count, setCount } = useContext(CounterContext);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      <Counter />
    </CounterContext.Provider>
  );
}



export default App;

