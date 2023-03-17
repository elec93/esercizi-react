// Create a custom hook useCounter that keeps track of the state of a counter,
// and returns the current value of the counter as well as three functions to increment,
// decrement and reset the counter.
import { useState } from "react";

export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  function increment() {
    setCounter((counter) => counter + 1);
  }

  function decrement() {
    setCounter((counter) => counter - 1);
  }

  function reset() {
    setCounter(initialValue);
  }

  return {counter, increment, decrement,reset}
}
