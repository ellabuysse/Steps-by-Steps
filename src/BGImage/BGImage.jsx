import React, { Component } from 'react';
import './BGImage.css';
export default class BGImage extends Component {
    
    render() {
        return( 
            <div className="container" style={{
                backgroundImage: "url(" + this.props.img + ")",
                backgroundPosition: "("+ this.props.position +")"
            }}>
                    <div className="title"><strong id={this.props.id}>{this.props.title}</strong></div>
                
            </div>
        )
    }
}