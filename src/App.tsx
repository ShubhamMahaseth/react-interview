import { useState } from "react";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex bg-red-500">
      <h1 data-testid="count">{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
