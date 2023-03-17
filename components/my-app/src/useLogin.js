// Create a custom hook that keeps track of the state of a controlled
// form with the username and password inputs, and returns the current value of the
// inputs as well as an event handler to update either input.
import { useState } from "react";

export function useLogin() {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  const {username, password} = inputs

  function handleInputs(event) {
    const { name, value } = event.target;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
  }

  return {username, password, handleInputs}
}
