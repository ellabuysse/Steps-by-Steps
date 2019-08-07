import React, { Component } from 'react';

export default class PastResult extends Component {
    render() {
        return (
            <div className="result-block">
                <div>{this.props.resultScore}</div>
                <div>{this.props.resultTime}</div>
            </div>
        )
    }
}