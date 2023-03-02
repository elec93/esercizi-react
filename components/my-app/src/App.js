import React from "react";
import Hello from "./Hello";
import Welcome from "./Welcome";

const theName = "John";

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name={theName} age={7} />
      </div>
    );
  }
}

export default App;
