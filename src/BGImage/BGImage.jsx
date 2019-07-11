import React, { Component } from 'react';
import './BGImage.css';

/*let imgUrl = '{this.props.bg}'
    let styles = {
        root: {
            backgroundImage: 'url(' + imgUrl + ')',
            backgroundSize: 'cover',
            overflow: 'hidden',
        }, 
    }*/

export default class BGImage extends Component {
    
    render() {
        return( 
            <div className="container" style={{ backgroundImage: "url("+this.props.img+")" }}>
             
                    <div className="title"><strong>{this.props.title}</strong></div>
                
            </div>
        )
    }
}