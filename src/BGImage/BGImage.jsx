import React, { Component } from 'react';

export default class BGImage extends Component {
    
    render() {
        return( 
            <div className="container" style={{
                backgroundImage: "url(" + this.props.img + ")",
                backgroundPosition: "("+ this.props.position +")"
            }}>
                    <div className="title"><strong>{this.props.title}</strong></div>
                
            </div>
        )
    }
}