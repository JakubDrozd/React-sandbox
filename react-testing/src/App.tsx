import { useEffect, useState } from "react";

function App() {
  const [ctr, setCtr] = useState(0)
  useEffect(() =>{
    setTimeout(() => setCtr(1), 1000)
  }, [])
  return <div data-testid="timer">{ctr}</div>
}

export default App;
