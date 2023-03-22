// Create a FilteredList component that receives a list of objects each containing a name, an id and a age prop.
// The FilteredList component should render only the items of the list whose age is greater than 18,
// and the filtering should only happen when the list changes. Use useMemo to memoize the filtered list.

import React, { useMemo } from "react";

function FilteredList({ list }) {

  const listMinor = useMemo(() => list.filter((item) => item.age > 18), [list]);

  return (
    <div>
      <ul>
        {listMinor.map((item, index) => (
          <li key={index}>ID: {item.id}, NAME: {item.name}, AGE: {item.age}</li> ))}
      </ul>
    </div>
  );
}

export default FilteredList;
