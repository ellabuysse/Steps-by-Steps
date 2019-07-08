import React, { Component } from 'react';
import './FeatureBox.css';

export default class FeatureBox extends Component {

    render() {

        return(
            <div>
                <div className="tips-box">
                    <div className="tip">
                        <i className='{this.props.smallGraphic}'/>
                        <div>{this.props.tipText}</div>
                    </div>
                </div>
            </div>
        )
    }
}