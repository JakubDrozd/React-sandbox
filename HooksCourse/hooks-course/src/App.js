import {
  useState,
  useReducer,
  useEffect,
  useRef,
  useLayoutEffect,
} from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "./Button";

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

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
      });
    inputRef.current.value = "HELLO";
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
      <input type="text" value="PEDRO" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
      <br />
      <button>Button from parent</button>
      <Button></Button>
    </Base>
  );
}

export default App;
