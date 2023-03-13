// What happens if the numbers prop of the Sum component is not set?
// risposta: succede che numbers è undefined
// How can you set a default value for this prop?
import React from "react";

const Sum = ({ numbers = [2, 2, 3] }) => {
  const result = numbers.reduce((a, b) => a + b, 0);
  return <h1>{result}</h1>;
};

export default Sum;
