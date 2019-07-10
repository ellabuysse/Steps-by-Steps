import React, { Component } from 'react';
import './WhyMatters.css';

export default class WhyMatters extends Component {

    render() {

        return(
            <div>
                <div className="container" id={`static ${ this.props.bgImage }`}>
                    <div class="title"><strong>THe Earth needs our help</strong></div>
                </div>
                <i class="{this.props.image} large-graphic"></i>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

