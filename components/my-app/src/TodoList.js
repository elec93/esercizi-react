import React, { Component } from "react";

class TodoList extends Component {
  render() {
    const items = this.props.name.map((name) => <li>{name}</li>);
    return (
      <div>
        <ul>{items}</ul>
      </div>
    );
  }
}

export default TodoList;
