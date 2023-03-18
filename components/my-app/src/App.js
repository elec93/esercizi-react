import React from "react";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";

class App extends React.Component {
  render() {
    return (
      <div>
        <GithubUser username={"elec93"} />
        <GithubUserList />
      </div>
    );
  }
}

export default App;
