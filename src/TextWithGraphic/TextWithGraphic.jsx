import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TextWithGraphic.css';

export default class TextWithGraphic extends Component {

    render() {

        return(
            <div className="txt-graphic-container">
                
                <div className="icon">
                    <FontAwesomeIcon icon={this.props.graphic} size="7x"/>
                </div>
                <div className="paragraph">{this.props.text}</div>
            </div>
        )
    }
}