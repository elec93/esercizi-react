import React, { useRef, useEffect } from "react";

function CarDetails({ initialData }) {
  const formRef = useRef("");

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const carDetails = {
      model: formData.get("model"),
      year: formData.get("year"),
      color: formData.get("color"),
    };
    console.log(carDetails);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input name="model" defaultValue={initialData.model} />
      <input name="year" defaultValue={initialData.year} />
      <input name="color" defaultValue={initialData.color} />
      <button type="submit">Invia</button>
    </form>
  );
}

export default CarDetails;

