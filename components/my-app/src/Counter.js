import React, { Component } from "react";

class Counter extends Component {
  state = { count: this.props.value };

  constructor(props) {
    super(props);
    setInterval(() => {
      this.setState({ count: this.state.count + this.props.amount });
    }, this.props.interval);
  }

  render() {
    return <h1>{this.state.count}</h1>
  }
}

export default Counter;
