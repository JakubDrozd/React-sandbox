import { useEffect, useState } from "react";

function App() {
  let [counter, setCounter] = useState(0)
  return <button data-testid="button" onClick={()=> setCounter(counter + 1)}>{counter}</button>
}

export default App;
