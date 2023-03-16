import React from "react";
import Clock from "./Clock";
import { LanguageContext } from "./LanguageContext";


class App extends React.Component {

  state = {
    language: "en"
  }

  handleLanguage = (event) =>{
    this.setState.state({
      language: event.target.language

    })
  }
  render() {
    return (
      <div>
        <select value={this.state.language} on onChange={this.handleLanguage}>
          <option value="en">english</option>
          <option value="it">italiano</option>
        </select>
        <Clock />
        <LanguageContext.Provider value ={this.state.language}></LanguageContext.Provider>
    
      </div>
    );
  }
}

export default App;
