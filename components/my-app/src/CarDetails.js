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

    const carDetails = {
      model: modelInputRef.current.value,
      year: yearInputRef.current.value,
      color: colorInputRef.current.value,
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
import React, { useRef, useEffect } from "react";

function CarDetails({ initialData }) {
  const formRef = useRef(null);
  const modelInputRef = useRef(null);
  const yearInputRef = useRef(null);
  const colorInputRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const carDetails = {
      model: modelInputRef.current.value,
      year: yearInputRef.current.value,
      color: colorInputRef.current.value,
    };
    console.log(carDetails);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input name="model" defaultValue={initialData.model} ref={modelInputRef} />
      <input name="year" defaultValue={initialData.year} ref={yearInputRef} />
      <input name="color" defaultValue={initialData.color} ref={colorInputRef} />
      <button type="submit">Invia</button>
    </form>
  );
}

export default CarDetails;