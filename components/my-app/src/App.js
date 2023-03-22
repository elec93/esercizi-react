import React from "react";
import CarDetails from "./CarDetails";

export function App() {

  return (
    <div>
      <CarDetails initialData={{ model: 'lanciaY', year: 2000, color: 'yellow' }} />
    </div>
  );
}

export default App;
