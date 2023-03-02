import React from "react";
import Counter from "./Counter";

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter value={0} interval={1000} amount={1} />
      </div>
    );
  }
}

export default App;
