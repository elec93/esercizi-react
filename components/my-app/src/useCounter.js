// Modify the useCounter custom hook from Custom Hooks 01
// to use the useCallback to memoize the functions used to
// increment, decrement and reset the counter.
import { useState, useCallback } from "react";

export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const increment = useCallback(function () {
    setCounter((counter) => counter + 1);
  }, []);

  const decrement = useCallback(function () {
    setCounter((counter) => counter - 1);
  }, []);

  const reset = useCallback(function () {
    setCounter(initialValue);
  }, [initialValue]);

  return { counter, increment, decrement, reset };
}
