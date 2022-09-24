import React, { Component } from "react";
import { Base, Heading } from "./StyledLib";
import UpdatedComponent from "./withCounter";

export class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <Base>
        <Heading onMouseOver={incrementCount}>
          {this.props.name} Hovered {count} times
        </Heading>
      </Base>
    );
  }
}

export default UpdatedComponent(HoverCounter);
