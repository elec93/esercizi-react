// Create a GithubUser component that fetches the data of the username passed as a prop,
// and renders some of the data within a div tag.
// The API to query is https://api.github.com/users/${username}.
import { useState, useEffect } from "react";

function GithubUser({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getData();
  }, [username]);

  async function getData() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  if (error) {
    return <div>Errore: {error.message}</div>;
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {data && (
        <div>
          <h3>{data.name}</h3>
          <img src={data.avatar_url} />
        </div>
      )}
    </div>
  );
}

export default GithubUser;