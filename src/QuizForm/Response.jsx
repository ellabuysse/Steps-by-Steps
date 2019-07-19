import React, { Component } from 'react';
import './Response.css';


export default class Response extends Component {
    render() {
        return(


            
            <div className="results">
               
                <div className="total-pts-container">
                <h3 className="total-pts">Total impact points: </h3>
            </div>
            <div className="points-container">
                <div className="points"><span>{this.props.formResponse}</span></div>
            </div>
               </div>

        )
    }
}