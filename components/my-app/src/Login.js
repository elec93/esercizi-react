import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handlerInput = (event) => {
    const inputValue =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: inputValue,
    });
  };

  handleDisabled = () => {
    return this.state.username === "" || this.state.password === "";
  };

  handleReset = () => {
    this.setState({
      username: "",
      password: "",
      remember: false,
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handlerInput}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlerInput}
          />
          <input
            name="remember"
            checked={this.state.remember}
            type="checkbox"
            onChange={this.handlerInput}
          />
          <button
            name="button"
            disabled={this.handleDisabled()}
            onClick={() => this.props.onLogin(this.state)}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
