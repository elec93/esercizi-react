// Create a Container component that renders its children within a div tag.
//Have the div tag use a white background and a red border,
//either with a custom class or by using tailwindcss.

import React, { Component } from "react";

class Container extends Component {
  render() {
    return (
      <div style={{background: "white", border: "1px solid red"}}>
       {this.props.children}
      </div>
    );
  }
}

export default Container;
