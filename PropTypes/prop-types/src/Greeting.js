import { PropTypes } from "prop-types";

Greeting.propTypes = {
  name: PropTypes.string,
};

export function Greeting({ name }) {
  return (
    <div>
      <h1>Good morning {name}</h1>
    </div>
  );
}
