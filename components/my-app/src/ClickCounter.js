// Add a side effect to the ClickCounter component from useState 01 that calls a onCounterChange function
//with the current value of the counter every time value of the counter changes. The function should be received as a prop.
import React, { useState, useEffect } from "react";
import "./ClickCounter.css";

function ClickCounter({ counter = 0, onCounterChange }) {
  const [stateCounter, setStateCounter] = useState(counter);

  function handleIncrementBtn() {
    setStateCounter((prevState) => prevState + 1);
  }

  useEffect(() => {
    onCounterChange(stateCounter);
  }, [onCounterChange, stateCounter]);

  return (
    <div className="upContainer">
      <button onClick={handleIncrementBtn}>Up</button>
      <div>{stateCounter}</div>
    </div>
  );
}

export default ClickCounter;
