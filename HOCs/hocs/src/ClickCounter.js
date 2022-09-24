import React, { Component } from "react";
import styled from "styled-components";
import { Base } from "./StyledLib";
import UpdatedComponent from "./withCounter";

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
    const { count, incrementCount } = this.props;
    return (
      <Base>
        {" "}
        <Button onClick={incrementCount}>
          {this.props.name} Clicked {count} times
        </Button>
      </Base>
    );
  }
}

export default UpdatedComponent(ClickCounter);
