import React, { Component } from 'react';
import './FeatureBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class FeatureBox extends Component {

    render() {
        let componentStyles = {
            backgroundColor: this.props.color
        }

        return (
            <div className="featureBox" style={componentStyles}>
                <div className="tip" >
                    <div>
                        <FontAwesomeIcon className="tip-icon" icon={this.props.smallGraphic} size="2x" />
                    </div>
                    <div>
                        <div className="tip-text">{this.props.tipText}</div>
                    </div>
                </div>
            </div>
        )
    }
}
