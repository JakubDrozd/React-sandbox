import { useEffect, useState } from "react";

function App() {
  let [ctr, setCtr] = useState(0)
  useEffect(() => {
    setCtr(1)
  },[])
  return <div data-testid="ctr">{ctr}</div>
}

export default App;
