// Rewrite the Welcome component to be a function component.
import React from "react";
import Age from "./Age";

const Welcome = (props) => {
  return (
    <div>
      <p>
        Welcome, <strong>{props.name}</strong>
      </p>
      <p>
        <Age age={props.age} />
      </p>
    </div>
  );
};

export default Welcome;
