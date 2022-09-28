import {
  useState,
  useReducer,
  useEffect,
  useRef,
  useLayoutEffect,
  createContext,
  useMemo,
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
        setData(response.data);
      });
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const findLongestName = (comments) => {
    if (!comments) {
      return null;
    }
    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("Algorithm computed");
    return longestName;
  };

  const getLongestName = useMemo(() => {
    findLongestName(data);
  }, [data]);

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
      <div>{getLongestName}</div>
    </Base>
  );
}

export default App;
