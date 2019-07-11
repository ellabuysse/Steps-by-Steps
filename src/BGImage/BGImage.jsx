import React, { Component } from 'react';
import './BGImage.css';


export default class BGImage extends Component {
    
    render() {
        return( 
            <div className="container" style={{ backgroundImage: "url("+this.props.img+")"}}>
                
                    <div className="title"><strong>{this.props.title}</strong></div>
                
            </div>
        )
    }
}