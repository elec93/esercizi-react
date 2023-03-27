// Modify the useGithubUser hook so that, if the username is null, no request is made.
import useSWR from "swr";

const fetching = (url) => fetch(url).then((r) => r.json());
export function useGithubUser(username) {
  const { data, error } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetching
  );
  return { user: data, error };
}
