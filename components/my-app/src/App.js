// Add a Route to the users path that shows the GihubUserList component from useEffect 04.
// Modify it so that instead of showing the GithubUser component
// for each username entered, it shows a link to a nested route that shows the ShowGithubUser component.
// In doing so, remove the /users/:username route from the App component,
// and add a new nested route within the /users route.

import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import GithubUserList from "./GithubUserList";

function App() {
  return (
    <>
      <Link to="/">Go to welcome</Link> |{" "}
      <Link to="/counter">Go to counter</Link> |{" "}
      <Link to="/users/:username">Go to user</Link>
      <Routes>
        <Route path="/" element={<Welcome name="Ele" />} />
        <Route path="/counter" element={<Counter counter={0} />} />
        <Route path="/users/*" element={<GithubUserList />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
        <Route path="*" element={
            <div>
              <h3>NOT FOUND</h3>
              <Link to="/">Go Back</Link>
            </div>
          }/>
      </Routes>
    </>
  );
}

export default App;
