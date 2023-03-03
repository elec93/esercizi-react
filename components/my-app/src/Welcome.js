import React from "react";

class Welcome extends React.Component {
    render() {
        return (
            <div> 
                <p>Welcome, <strong>{this.props.name}</strong></p>
            </div>
        )
    }
    
}

export default Welcome