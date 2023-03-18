// Create a GithubUserList component that maintains an array of usernames, 
// showing a GithubUser component for each username entered. 
// The usernames should be added to the array using an input field and a button.
import React, { useState } from "react";
import GithubUser from "./GithubUser";

function GithubUserList() {
  const [usernames, setUsernames] = useState([]);

  setUsernames(() => {
    
  })
  return (
    <GithubUser />
  )
}

export default GithubUserList