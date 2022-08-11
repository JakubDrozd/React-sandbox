import { Component } from "react";

export class Button extends Component<any, any> {
    constructor(props: any) {
      super(props);
  
      this.state = {
        count: 0,
      };
  
      this.countUp = this.countUp.bind(this);
    }
  
    countUp() {
      this.setState({
        count: this.state.count + 1,
      });
    }
  
    render() {
      return (
        <div>
          <button onClick={this.countUp}>Click Me!</button>
          <p>{this.state.count}</p>
        </div>
      );
    }
  }
