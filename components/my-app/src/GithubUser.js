// Create a GithubUser component that fetches the data of the username passed as a prop,
// and renders some of the data within a div tag.
// The API to query is https://api.github.com/users/${username}.

import { useEffect, useState } from "react";

export default function GithubUser({ username }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getGithubUser(username);
  }, [username]);

  async function getGithubUser(username) {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      if (response.status !== 200) {
        setError(json.message);
      }
      setUser(json);
    } catch (error) {
      setError(error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      {error && <div>{error}</div>}
      {loading && <div>is loading...</div>}
      {user && !error && (
        <div>
          {user.name}
          <img src={user.avatar_url} />
        </div>
      )}
    </div>
  );
}
