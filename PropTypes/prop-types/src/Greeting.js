import { PropTypes } from "prop-types";
import React from "react";

export function Greeting({ name, repos }) {
  return (
    <div>
      <h1>Good morning {name}</h1>
      <h2>List of your repositories:</h2>
      <ul>
        {repos.map((project) => {
          return (
            <li key={project.name} style={{ listStyle: "none" }}>
              <h3>
                {project.index}. {project.name}
              </h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string,
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      index: PropTypes.number.isRequired,
    })
  ),
};

Greeting.defaultProps = {
  name: "Anonymous",
  repos: [{ name: "unknown", index: 0 }],
};
