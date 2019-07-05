import React, { Component } from 'react';
import './WhyMatters.css';

export default class WhyMatters extends Component {

    render() {

        return(
            <div>
                <div className="container" id="{this.props.bgImage}">
                    <div class="title"><strong>{this.props.header}</strong></div>
                </div>
                <i class="{this.props.image} large-graphic"></i>
                <p>{this.props.text}</p>
            </div>
        )
    }
}