import React from "react";
import Login from "./Login";
import UncontrolledLogin from "./UncontrolledLogin";

class App extends React.Component {
  handleOnLogin = (state) => {
    console.log(state);
  };

  render() {
    return (
      <div>
        <Login onLogin={this.handleOnLogin} />
        <UncontrolledLogin onLogin={this.handleOnLogin}/>
      </div>
    );
  }
}

export default App;
