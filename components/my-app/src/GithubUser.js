// Modify the useGithubUser hook to return the function to fetch the data of a Github user, 
// along with the data of the user and the error and loading states.

import { useEffect } from "react";
import { useGithubUser } from "./useGithubUser";

function GithubUser({ username }) {
  const { getData, user, error, loading } = useGithubUser(username);

  useEffect(() => {
    getData();
  }, [username, getData]);

  if (error) {
    return <div>There's an error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {user && <h4>{user.name}</h4>}
      {user && <img src={user.avatar_url} />}
    </div>
  );
}

export default GithubUser;
