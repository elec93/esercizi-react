import React from "react";
import Sum from "./Sum";

class App extends React.Component {
  render() {
    return (
      <div>
        <Sum numbers={[2, 2, 3]}/>
      </div>
    );
  }
}

export default App;
