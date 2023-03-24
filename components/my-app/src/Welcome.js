import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export function Welcome() {
  const { name= "Default Name" } = useParams();
  const navigate = useNavigate();

  function handleLoginClick() {
    navigate("/login");
  }
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      <Link to="/login">login to app</Link>
      <div>
        <button onClick={handleLoginClick}>enter the app</button>
      </div>
    </div>
  );
}

export default Welcome;
