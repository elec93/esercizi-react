import React, { Component } from "react";

class Login extends Component {
  
  handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    const remember = event.target.elements.remember.checked;
    this.props.onLogin({ username, password, remember });
  };

  handleDisabled = (event) => {
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    return (!username || !password) ? true : false;
  };

  render() {
    return (
      <div>
        <h3>Uncontrolled Components</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <input type="checkbox" name="remember" />

          <button type="submit" disabled={this.handleDisabled()}>
            Login
          </button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}

export default Login;
