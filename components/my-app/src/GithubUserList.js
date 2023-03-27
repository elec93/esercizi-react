// Add an index route to the GithubUserList route that shows the "Add a user and select it" message.

import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./ShowGithubUser";

function GithubUserList() {
  const [usernames, setUsernames] = useState([]);
  const [usernameInput, setUsernameInput] = useState("");

  const handleInputChange = (event) => {
    setUsernameInput(event.target.value);
  };

  const handleAddUser = () => {
    if (usernameInput) {
      setUsernames([...usernames, usernameInput]);
      setUsernameInput("");
    }
  };

  return (
    <div>
      <div>
        <input type="text" value={usernameInput} onChange={handleInputChange} />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <div>
        {usernames.map((username) => (
          <li key={username}>
            <Link to={`/${username}`}>{username}</Link>
          </li>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<h3>Add a user and select it</h3>} />
        <Route path="/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}

export default GithubUserList;
