import React, { Component } from "react";

class Login extends Component {
  ref = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    const username = this.ref.current.elements.username.value;
    const password = this.ref.current.elements.password.value;
    const remember = this.ref.current.elements.remember.checked;
    this.props.onLogin({ username, password, remember });
  };

  handleDisabled = () => {
    const { username, password } = this.ref.current.elements;
    return username.value === "" || password.value === "";
  };

  render() {



    return (
      <div>
        <h3>Uncontrolled Components</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="username" />
          <input type="password" name="password" />
          <input type="checkbox" name="remember" />

          <button type="submit" disabled={this.handleDisabled()}> Login </button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}

export default Login;
