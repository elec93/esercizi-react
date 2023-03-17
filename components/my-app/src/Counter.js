// Rewrite the Counter component from State 1 as a function component and
// add a side effect that initializes the interval as soon as the component renders,
// and clears it when the component unmounts.

import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevState) => prevState + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return <h1>{count}</h1>;
}

export default Counter;
