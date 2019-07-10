import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TextWithGraphic.css';

export default class TextWithGraphic extends Component {

    render() {

        return(
            <div>
                
                <div className="img" style={{backgroundImage: "url("+this.props.img+")"}}></div>
                <div className="title">{this.props.photo}</div>
                <div class="icon">
                    <FontAwesomeIcon icon={this.props.graphic} size="3x"/>
                </div>
                <div className="text">{this.props.text}</div>
            </div>
        )
    }
}