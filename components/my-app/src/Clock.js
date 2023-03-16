import React, { Component } from "react";
import { LanguageContext } from "./LanguageContext";

const String = {
    en:{
        time: "current time is:"
    },
    it:{
        time: "l'ora attuale è:"
    }
}
class Clock extends Component {
  state = {
    date: new Date(),
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(Language) => {
            return <div>{String[Language].time} {this.state.date.toLocaleTimeString()}</div>;
          }}
        </LanguageContext.Consumer>
        {this.state.date.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;
