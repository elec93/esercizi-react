import {useCounter} from "./useCounter"
export function HookCounter({ initialValue = 0 }) {
  const {counter, onIncrement, onReset} = useCounter(initialValue);

  return (
    <div>
      <h2> Counter: {counter}</h2>
      <button onClick={onIncrement}>+</button>
      <button onClick={onReset}>reset</button>

    </div>
  );
}

export default HookCounter;
