import { Greeting } from "./Greeting";

function App() {
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
    </div>
  );
}

export default App;
