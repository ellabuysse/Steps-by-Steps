import React, { Component } from 'react';

export default class FeatureBlock extends Component {

    render() {
        return(
            <React.Fragment>
                <h1>{this.props.title}</h1>
            </React.Fragment>
        )
    }
}