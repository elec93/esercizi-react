// Write a Sum function component that receives a numbers prop
// (expected to be an array of numbers) and renders the sum
// of all numbers in the array within a h1 tag.
import React from "react";

const Sum = ({numbers}) => {
  return (
     <div>
       <h1>{numbers.reduce((a, b) => a + b, 0)}</h1>
    </div>
  )}

export default Sum;
