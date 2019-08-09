import React, { Component } from 'react';
import './PastResult.css';

export default class PastResult extends Component {
    render() {
        return (
        <div className="result-block" onClick={() => {this.props.changeQuiz(this.props.id)}}>
                <div></div>
               
                <div className="past-points" style={{
                            color:
                                this.props.totalPoints <= 3 ?
                                    "#6ecd9c " :
                                    this.props.totalPoints <= 7 ?
                                        "rgba(251, 170, 109, 0.72)" :
                                        "rgba(251, 86, 78, 0.62)"
                        }}>
                            <div className="result-number">{this.props.totalPoints}</div>
                        </div>
            </div>
        )
    }
}