import React from "react";
import Age from "./Age"

class Welcome extends React.Component {
    render() {
        return (
            <div> 
                <p>Welcome, <strong>{this.props.name}</strong></p>
                <p><Age age={this.props.age}/></p>
            </div>
        )
    }
    
}

export default Welcome