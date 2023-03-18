// Create a GithubUserList component that maintains an array of usernames, 
// showing a GithubUser component for each username entered. 
// The usernames should be added to the array using an input field and a button.
import React, { useState } from "react";
import GithubUser from "./GithubUser";

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
          <GithubUser key={username} username={username} />
        ))}
      </div>
    </div>
  );
}

export default GithubUserList;

