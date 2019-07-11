import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TextWithGraphic.css';

export default class TextWithGraphic extends Component {

    render() {

        return(
            <div class="txt-graphic-container">
                
                <div class="icon">
                    <FontAwesomeIcon icon={this.props.graphic} size="7x"/>
                </div>
                <div className="text">{this.props.text}</div>
            </div>
        )
    }
}