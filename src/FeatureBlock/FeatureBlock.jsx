import React, { Component } from 'react';

export default class FeatureBlock extends Component {

    render() {

        return(
            <React.Fragment>
                <div className="container" id="{this.props.bg-image}">
                    <div className="title"><strong>{this.props.title}</strong></div>
                </div>
                <div className="tips-container">
                    <div className="tips-box">
                        <div className="tip">
                            <i className='{this.props.small-graphic-1}'/>
                            <div>{this.props.tip-1}</div>
                        </div>
                    </div>
                    <div className="tips-box">
                        <div className="tip">
                            <i className="{this.props.small-graphic-2}"/>
                            <div>{this.props.tip-2}</div>
                        </div>
                    </div>
                    <div className="tips-box">
                        <div className="tip">
                            <i className="{this.props.small-graphic-3}"></i>
                            <div>{this.props.tip-3}</div>
                        </div>
                    </div>
                    <div>{this.props.paragraph}</div>
                </div>
            </React.Fragment>
        )
    }
}