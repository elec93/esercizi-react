import { useParams } from "react-router-dom";
import GithubUser from "./GithubUser";

function ShowGithubUser() {
  const { user = "elec93" } = useParams();
  return (
    <div>
      <GithubUser username={user} />
    </div>
  );
}

export default ShowGithubUser;
