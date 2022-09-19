import { Greeting } from "./Greeting";
import styled from "styled-components";
import { useState } from "react";
import { Counter } from "./Counter";

const Button = styled.button`
  font-size: 1em;
  background: ${(props) => (props.dark ? "black" : "white")};
  color: ${(props) => (props.dark ? "white" : "black")};
  border: 1px solid ${(props) => (props.dark ? "gray" : "black")};
  padding: 0.25em 1em;
`;
function App() {
  const [buttonTheme, setButtonTheme] = useState(false);

  return (
    <div>
      <Greeting
        name="Jakub"
        repos={[
          { name: "project-shopping-car", index: 1 },
          { name: "react-sandbox", index: 2 },
          { name: "memory-card", index: 3 },
          { name: "typescript", index: 4 },
          { name: "cv-application", index: 5 },
          { name: "battleships", index: 6 },
          { name: "js-top", index: 7 },
        ]}
      ></Greeting>
      <Button dark={buttonTheme} onClick={() => setButtonTheme(!buttonTheme)}>
        Click me!
      </Button>
      <Counter></Counter>
    </div>
  );
}

export default App;
