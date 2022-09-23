//Home component

import { useContext } from "react";
import { UserContext } from "./UserContext";
export default function Home() {
  const { value, setValue } = useContext(UserContext);
  return (
    <div>
      <h1>Home</h1>
      {value}
      <button onClick={() => setValue("Hey!")}>Change value</button>
    </div>
  );
}
