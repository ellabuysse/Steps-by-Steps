import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class TextBlock extends Component {

    render() {

        return(
            <div>
                <FontAwesomeIcon icon={this.props.graphic}/>
                <div>{this.props.text}</div>
            </div>
        )
    }
}