import React from "react";
import FilteredList from "./FilteredList";
export function App() {
  const users = [
    { id: 1, name: "Qui", age: 110 },
    { id: 2, name: "Quo", age: 43 },
    { id: 3, name: "Qua", age: 60 },
    { id: 4, name: "Donald", age: 3 },
  ];
  return (
    <div>
      <FilteredList list={users} />
    </div>
  );
}

export default App;
