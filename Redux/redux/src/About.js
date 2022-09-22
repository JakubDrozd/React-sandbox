import { useContext } from "react";
import { UserContext } from "./UserContext";
//About
export default function About() {
  const { value, setValue } = useContext(UserContext);
  return (
    <div>
      <h1>About</h1>
      {value} (About)
      <button onClick={() => setValue("Hey!")}>Change value</button>
    </div>
  );
}
