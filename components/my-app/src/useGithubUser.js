// Modify the useGithubUser custom hook from Custom Hooks 03 to use the useSWR hook to fetch the data of a Github user.
import useSWR from "swr";

const fetching = url => fetch(url).then(r => r.json())
export function useGithubUser(username) {
  const { data, error } = useSWR(`https://api.github.com/users/${username}`, fetching)

  return { user: data, error };
}