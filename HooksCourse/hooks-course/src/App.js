import { useState, useReducer, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

//App component
const Base = styled.div`
  text-align: center;
`;

function App() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

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
    </Base>
  );
}

export default App;
