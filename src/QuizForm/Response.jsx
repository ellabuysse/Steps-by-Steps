import React, { Component } from 'react';

export default class Response extends Component {
    render() {
        return(
            <div>total points: {this.props.formResponse}</div>
        )
    }
}