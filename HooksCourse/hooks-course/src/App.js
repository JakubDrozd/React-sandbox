import { useState, useReducer, useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

//App component
const Base = styled.div`
  text-align: center;
`;

function App() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "";
  };

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
      });
  }, []);

  return (
    <Base>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Here
      </button>
      {<p>{data}</p>}
      <h1>Pedro</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </Base>
  );
}

export default App;
