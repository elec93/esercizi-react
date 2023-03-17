import { useCounter } from "./useCounter";

function Counter() {
  const { counter, increment, decrement, reset } = useCounter();

  return <div>
    <h1>{counter}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>reset</button>
  </div>;
}

export default Counter;
