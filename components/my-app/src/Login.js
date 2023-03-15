// Rewrite the Login component from Forms 03 as a function component, 
//and use the useState hook to track the state of the username, password and remember inputs. Tip: you can use useState more than once.
import React, { useState } from "react";

function Login() {
  const [stateInput, setInput] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const handlerInput = (event) => {
    const { name, type, value, checked } = event.target;
    setInput((inputs) => {
      return {
        ...inputs,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          value={stateInput.username}
          onChange={handlerInput}
        />
        <input
          type="password"
          name="password"
          value={stateInput.password}
          onChange={handlerInput}
        />
        <input
          name="remember"
          checked={stateInput.remember}
          type="checkbox"
          onChange={handlerInput}
        />
        <button
          name="button"
          disabled={
            stateInput.username === "" || stateInput.password === ""
              ? true
              : false
          }
          onClick={() => this.props.onLogin(this.state)}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
