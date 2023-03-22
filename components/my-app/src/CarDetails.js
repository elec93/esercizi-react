import { useEffect, useRef } from "react";

function CarDetails({ initialData }) {
  const modelRef = useRef();
  const yearRef = useRef();
  const colorRef = useRef();

  useEffect(() => {
    if (initialData) {
      const { model, year, color } = initialData;
      modelRef.current.value = model;
      yearRef.current.value = year;
      colorRef.current.value = color;
    }
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const model = modelRef.current.value;
    const year = yearRef.current.value;
    const color = colorRef.current.value;
    console.log(`Car: ${model}, ${year}, ${color}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={modelRef} />
      <input type="text" ref={yearRef} />
      <input type="text" ref={colorRef} />
      <button type="submit">Click</button>
    </form>
  );
}

export default CarDetails;
