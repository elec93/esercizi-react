import React from "react";
import ClickCounter from "./ClickCounter";

function App (){

  function onCounterChange(counter){
    console.log(counter);
  }

  
    return (
      <div>
        <ClickCounter onCounterChange={onCounterChange} />
      </div>
    );
  
}

export default App;
