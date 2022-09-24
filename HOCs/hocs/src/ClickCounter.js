import React, { Component } from "react";
import styled from "styled-components";

const Base = styled.div`
  font-size: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  font-size: 2em;
  color: palevioletred;
  background-color: papayawhip;
  padding: 0.25em 1em;
  border: 1px solid pink;
  &:hover {
    color: orange;
    transform: scale(1.1);
  }
  transition: scale 0.5s ease-in-out;
`;

export class ClickCounter extends Component {
  render() {
    return (
      <Base>
        {" "}
        <Button>Clicked X times</Button>
      </Base>
    );
  }
}

export default ClickCounter;
