import React, { Component } from 'react';
import './PastResult.css';

export default class PastResult extends Component {
    render() {
        return (
        <div className="result-block" onClick={() => {this.props.changeQuiz(this.props.id)}}>
                <div></div>
                <div className="result-number">{this.props.totalPoints}</div>
            </div>
        )
    }
}