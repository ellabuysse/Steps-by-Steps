import React, { Component } from 'react';
import './FeatureBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class FeatureBox extends Component {

    render() {

        return(
            <div>
                <div className="tips-box">
                    <div className="tip">
                        <FontAwesomeIcon icon={this.props.smallGraphic}/>
                        <div className="tip-text">{this.props.tipText}</div>
                    </div>
                </div>
            </div>
        )
    }
}