import React, { Component } from 'react';

export default class Response extends Component {
    render() {
        return(


            
            <div className="results">Your total is: {this.props.formResponse}.</div>

        )
    }
}