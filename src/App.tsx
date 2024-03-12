import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number>(0); // Specify the type of count as number

  return (
    <div>
      <h1>Countx: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
