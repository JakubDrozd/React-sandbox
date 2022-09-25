import { useState } from "react";
import styled from "styled-components";

const Base = styled.div`
  text-align: center;
`;

function App() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);
  return (
    <Base>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setShowText(!showText);
        }}
      >
        Click Here
      </button>
    </Base>
  );
}

export default App;
