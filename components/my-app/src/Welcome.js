import React from "react";
import Age from "./Age";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        {
          <p>
            Welcome, <strong>{this.props.name}</strong>
          </p>
        }
        {this.props.name === "John" &&
          this.props.age > 18 &&
          this.props.age < 65 && (
            <p>
              <Age age={this.props.age} />
            </p>
          )}
      </div>
    );
  }
}

export default Welcome;
