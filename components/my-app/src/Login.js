import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: "",
    remember: false,
  };

  handlerInput = (event) => {
    const {name, type, value, checked} = event.target
    const valueIs = type === "checkbox" ? checked : value
    this.setState({[name]: valueIs})
  }

  handleReset = () =>{
    this.setState({
      username: "",
      password: "",
      remember: false,
    })
  }
  
  render() {
    return (
      <div>
          <h3>Controlled Components</h3>
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
            disabled={this.state.username === "" || this.state.password === "" ? true : false }
            onClick={() => this.props.onLogin(this.state)}
          >
            Login
          </button>
          <button onClick={this.handleReset}>Reset</button>
        </form>
      </div>
    );
  }
}

export default Login;