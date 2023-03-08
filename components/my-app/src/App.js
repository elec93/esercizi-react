import React from "react";
import TodoList from "./TodoList";

class App extends React.Component {

  render() {
    return (
      <div>
        <TodoList name = {["Tony","Bob","Jane" ]}/>
      </div>
    );
  }
}

export default App;
