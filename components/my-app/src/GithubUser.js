// Modify the useGithubUser custom hook from Custom Hooks 03 to use the useSWR hook to fetch the data of a Github user.
import { useEffect } from "react";
import { useGithubUser } from "./useGithubUser";


function GithubUser({ username }) {
  const { user, error } = useGithubUser(username);

  // useEffect(() => {
  //   getData();
  // }, [username]);

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
