import React from "react";

function HelloName({ name }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return (
    <div>
      <HelloName name="Spank" />
    </div>
  );
}

export default App;


