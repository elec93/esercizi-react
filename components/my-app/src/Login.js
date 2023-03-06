import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };
  handlerInput = (event) => {
    const inputValue = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: inputValue,
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
        </form>
      </div>
    );
  }
}

export default Login;
