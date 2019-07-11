import React, { Component } from 'react';
import './StatsBlock.css';

export default class StatsBlock extends Component {

    render() {

        return(
            
                <p className="stats-block">
                    <mark className="stats-number" style={{color:this.props.color}}>{this.props.statsNumber}</mark>
                    <p className="stats-text">{this.props.statsText}</p>
                </p>
         
        )
    }
}