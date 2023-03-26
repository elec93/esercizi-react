import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            <Link to={`/users/${username}`}>{username}</Link>
          </li>
        ))}
      </div>
      <Routes>
        <Route path="/:username" element={<ShowGithubUser />} />
      </Routes>
    </div>
  );
}

export default GithubUserList;
