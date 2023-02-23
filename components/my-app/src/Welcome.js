import React from "react";

class Welcome extends React.Component {
    render() {
        return (
            <div> 
                <p>Welcome, <strong>{this.props.name}</strong></p>
                <p>Your age is {this.props.age}</p>
            </div>
        )
    }
    
}

export default Welcome