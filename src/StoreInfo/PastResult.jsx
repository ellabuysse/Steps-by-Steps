import React, { Component } from 'react';

export default class PastResult extends Component {
    render() {
        return (
        <div className="result-block" onClick={() => {this.props.changeQuiz(this.props.id)}}>
                <div></div>
                <div>{this.props.totalPoints}</div>
            </div>
        )
    }
}