// Add a new Route to the users/:username path that renders a ShowGithubUser 
// component that receives the username as a path parameter and renders 
// the GithubUser component from useEffect 03 by passing it the received username.
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
