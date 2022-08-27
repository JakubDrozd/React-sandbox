import { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Magnificent Monkeys")

  function handleClick(){
    setHeading("Radical Rhinos")
  }

  return (
    <div>
      <button type="button" onClick={handleClick}>Click me</button>
      <h1>{heading}</h1>
    </div>
  );
}

export default App;
