import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TextBlock.css';

export default class TextBlock extends Component {

    render() {

        return(
            <div>
                
                <div class="icon">
                    <FontAwesomeIcon icon={this.props.graphic} size="3x"/>
                </div>
                <div className="paragraph">{this.props.text}</div>
            </div>
        )
    }
}