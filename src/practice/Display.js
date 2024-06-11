import React, { Component } from 'react';
export default class Display extends Component {
    render() {
        return (
            <div>
                <center>
                <h5>{this.props.name}</h5>   
                </center>
            </div>
        );
    }
}
//                <h5>This is from Display Component</h5>

