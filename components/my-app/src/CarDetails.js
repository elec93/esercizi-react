// Create a CarDetails uncontrolled form that uses the HTML Form API to allow the user to insert details about a car, such as the model, the year and the color. Allow the form to receive a initialData prop that contains the default values of each input, and reset the form every time the initialData value changes.

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

