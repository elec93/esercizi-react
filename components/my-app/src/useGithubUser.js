// Modify the useGithubUser hook to return the function to fetch the data of a Github user,
// along with the data of the user and the error and loading states.
import { useState } from "react";

export function useGithubUser(username) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getData() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const jsonData = await response.json();
      setUser(jsonData);
      setError(null);
    } catch (error) {
      setUser(null);
      setError(error);
    }finally{
        setLoading(false)
    }
  }

  return { getData, user, error, loading };
}
