import React from "react";
import GithubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";
import HookCounter from "./HookCounter";

class App extends React.Component {
  render() {
    return (
      <div>
      <HookCounter initialValue={0}/>
      </div>
    );
  }
}

export default App;
