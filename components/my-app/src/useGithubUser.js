// Modify the useGithubUser hook so that it returns a function to manually refetch the data when invoked.
import useSWR from "swr";

const fetching = (url) => fetch(url).then((r) => r.json());
export function useGithubUser(username) {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null,
    fetching
  );

  function refresh(){
    mutate()
  }
  return { user: data, error, onRefresh: refresh };
}
