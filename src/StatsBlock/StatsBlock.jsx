import React, { Component } from 'react';

export default class StatsBlock extends Component {

    render() {

        return(
            <div>
                <div className="stats-block">
                    <div className="stats-number">{this.props.statsNumber}</div>
                    <div className="stats-text">{this.props.statsText}</div>
                </div>
            </div>
        )
    }
}