import React, { Component } from 'react';
import './StatsBlock.css';

export default class StatsBlock extends Component {

    render() {

        return(
            
                <p className="stats-block">
                    <p className="stats-number">{this.props.statsNumber}</p>
                    <p className="stats-text">{this.props.statsText}</p>
                </p>
         
        )
    }
}