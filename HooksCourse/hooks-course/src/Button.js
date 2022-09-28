import { useState } from "react";
function Button() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Button from child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
}

export default Button;
