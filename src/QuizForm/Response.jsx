import React, { Component } from 'react';

export default class Response extends Component {
    render() {
        return(
            <div>Your total is: {this.state.formData.totalPoints}.</div>
        )
    }
}