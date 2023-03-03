import React, { Component } from "react";
import "./ClickTracker.css"
class ClickTracker extends Component {

    state = {
        lastClick: ""
    }

    handleButtonClick = (event) =>{
        const btnName = event.target.name;
       this.setState(({
            lastClick: btnName
        }))
    }

  render() {
    return (
    <div className="container">
        <button name="giallo" onClick={this.handleButtonClick}>press</button>
        <button name="verde" onClick={this.handleButtonClick}>press</button>
        <button name="blu" onClick={this.handleButtonClick}>press</button>
        <h1 className={`${this.state.lastClick}`}>colore {this.state.lastClick}</h1>
    </div>
    )
  }
}

export default ClickTracker;
