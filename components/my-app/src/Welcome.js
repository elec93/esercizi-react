import React, { useEffect } from "react";

export function Welcome() {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

function handleChange(event){
    setName(event.target.value)
}

useEffect(() => {
    inputRef.current.focus()
},[])

  return <div>
    <input ref={inputRef} type="text" value={name} onChange={handleChange}></input>
    {name && <h1>Welcome, {name}!</h1>}
  </div>;
}

export default Welcome;
