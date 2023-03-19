// Extract the logic to fetch a Github user's data from the GithubUser component from useEffect 03 into a custom hook called useGithubUser.
import { useState } from "react";

export function useGithubUser(username) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  async function getData() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const jsonData = await response.json();
      setUser(jsonData);
    } catch (error) {
      setError(error);
    }
  }

  return {getData, user, error };
}
