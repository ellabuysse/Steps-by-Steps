import React, { Component } from 'react';
import './StatsBlock.css';
import CountUp from 'react-countup';
import Counter from '../Counter.jsx';


export default class StatsBlock extends Component {

    render() {

        return(
            
                <p className="stats-block">
                    <mark 
                        className="stats-number" 
                        style={{color:this.props.color}}>
                        <Counter end={this.props.statsNumber} suffix={this.props.statsSuffix}/>
 
                        {/* <CountUp end={this.props.statsNumber} suffix={this.props.statsSuffix}/> */}
                                   
                    </mark>
                    <p className="stats-text">{this.props.statsText}</p>
                </p>
  
         
        )
    }
}