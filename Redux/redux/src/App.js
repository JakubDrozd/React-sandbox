import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./counter";
import Section from "./Section";
import Heading from "./Heading";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import { UserContext } from "./UserContext";
import { useState } from "react";
//App component
function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [value, setValue] = useState("Base");
  return (
    <Router>
      <div>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <h1>The count is: {count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <Section>
          <Heading>Title</Heading>
          <Section>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Heading>Heading</Heading>
            <Section>
              <Heading>Sub-heading</Heading>
              <Heading>Sub-heading</Heading>
              <Heading>Sub-heading</Heading>
              <Section>
                <Heading>Sub-sub-heading</Heading>
                <Heading>Sub-sub-heading</Heading>
                <Heading>Sub-sub-heading</Heading>
              </Section>
            </Section>
          </Section>
        </Section>
      </div>
      <UserContext.Provider value={{ value, setValue }}>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
