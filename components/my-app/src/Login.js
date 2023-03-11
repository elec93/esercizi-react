import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handlerInput = (event) => {
    const { name, type, value, checked } = event.target;
    const valueIs = type === "checkbox" ? checked : value;
    this.setState({ [name]: valueIs });
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

            style={{ color: this.state.password.length < 8 ? "red" : "green" }}
            
            name="button"
            disabled={this.state.username === "" || this.state.password === "" ? true : false}
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
