import React, { Component } from "react";

class UncontrolledLogin extends Component {
  _ref = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, remember } = this._ref.current.elements;

    console.log(this._ref)
    console.log(this._ref.current)

    this.props.onLogin({
      username: username.value,
      password: password.value,
      remember: remember.checked ? true : false,
    });
  };

  handleInputChange = () => {
    const { username, password, submit } = this._ref.current.elements;
    if (username.value === "" || password.value === "") {
      submit.disabled = true;
    } else {
      submit.disabled = false;
    }
  };

  render() {
    return (
      <div>
        <h3>Uncontrolled Components</h3>
        <form ref={this._ref} onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            type="text"
            name="username"
          />
          <input
            onChange={this.handleInputChange}
            type="password"
            name="password"
          />
          <input
            type="checkbox"
            name="remember"
          />

          <button name="submit" type="submit" disabled={true}>
            Login
          </button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}

export default UncontrolledLogin;
