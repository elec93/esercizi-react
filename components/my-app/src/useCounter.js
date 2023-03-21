import { useState, useCallback } from "react";

export function useCounter(initialValue = 0) {
  const [counter, setCounter] = useCounter(initialValue);

  const onIncrement = useCallback(function onIncrement() {
    setCounter((c) => c + 1);
  }, []);

  const onDecrement = useCallback(function onDecrement() {
    setCounter((c) => c - 1);
  }, []);

  const onReset = useCallback(
    function onReset() {
      setCounter(initialValue);
    },
    [initialValue]
  );

  return {
    onIncrement, onDecrement, onReset, counter

  }
}

export default useCounter;
