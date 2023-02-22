import React from "react";

export function sumNumbers(a, b) {
  const sum = a + b;
  return <h2>{sum}</h2>;
}

 function App() {
  return (
    <div>
      {sumNumbers(2, 3)}
    </div>
  );
}
export default App





