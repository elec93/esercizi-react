// Extract the logic to fetch a Github user's data from the GithubUser component from useEffect 03 into a custom hook called useGithubUser.
import { useEffect } from "react";
import { useGithubUser } from "./useGithubUser";

function GithubUser({ username }) {
  const { getData, user, error } = useGithubUser(username);

  useEffect(() => {
    getData();
  }, [username]);

  if (error) {
    return <div>There's an error: {error.message}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h4>{user.name}</h4>
      <img src={user.avatar_url} />
    </div>
  );
}

export default GithubUser;
