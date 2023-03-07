import React from "react";
import Login from "./Login";

class App extends React.Component {
  handleOnLogin = (state) => {
    console.log(state);
  };

  render() {
    return (
      <div>
        <Login onLogin={this.handleOnLogin} />
      </div>
    );
  }
}

export default App;
