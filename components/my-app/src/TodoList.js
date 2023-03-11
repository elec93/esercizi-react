import React, { Component } from "react";

class TodoList extends Component {
  state = {
    items: [],
    value: "",
  };

  handlerInput = (event) => {
    const addValue = event.target.value;
    this.setState({ value: addValue });
  };

  handlerAdd = () => {
    this.setState({ items: [...this.state.items, this.state.value] });
    this.setState({ value: "" });
  };

  handlerReset = () => {
    this.setState({ items: [], value: "" });
  };

  removeItem = (index) => {
      const newItemsArr = [...this.state.items];
      newItemsArr.splice(index, 1);
      this.setState({ items: newItemsArr });
    };
    
 
  render() {
    return (
      <div>
        <h3>List</h3>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={item + index}>{item} <button onClick={this.removeItem}>-</button></li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handlerInput}
        />
        <button onClick={this.handlerAdd}>+</button>
        <button onClick={this.handlerReset}>Reset</button>
      </div>
    );
  }
}

export default TodoList;
