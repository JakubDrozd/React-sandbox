import {
  useState,
  useReducer,
  useEffect,
  useRef,
  useLayoutEffect,
  createContext,
} from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "./Button";
import User from "./User";
import Login from "./Login";

//App component
const Base = styled.div`
  text-align: center;
`;

export const AppContext = createContext(null);

function App() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("");

  const inputRef = useRef(null);

  const buttonRef = useRef(null);

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
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button from parent
      </button>
      <Button ref={buttonRef}></Button>
      <AppContext.Provider value={{ username, setUsername }}>
        <Login></Login> <User></User>
      </AppContext.Provider>
    </Base>
  );
}

export default App;
