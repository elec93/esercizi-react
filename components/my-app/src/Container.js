// Modify the Container component so that it can display a title received within the title prop.

import React, { Component } from "react";

class Container extends Component {
  render() {
    return (
      <div style={{ background: "white", border: "1px solid red" }}>
        <h1>{this.props.title}</h1>
       <div>{this.props.children}</div>
      </div>
    );
  }
}

export default Container;
