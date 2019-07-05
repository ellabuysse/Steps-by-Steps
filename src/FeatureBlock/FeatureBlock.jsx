import React, { Component } from 'react';

export default class FeatureBlock extends Component {

    render() {

        return(
            <React.Fragment>
                <div className="container" id="{this.props.bg-image}">
                    <div className="title"><strong>{this.props.title}</strong></div>
                </div>
                <div className="tips-container">
                    <div className="tips-box {this.props}">
                        <div className="tip">
                            <i className='{this.props.smallGraphicOne}'/>
                            <div>{this.props.tipOne}</div>
                        </div>
                    </div>
                    <div className="tips-box">
                        <div className="tip">
                            <i className="{this.props.smallGraphicTwo}"/>
                            <div>{this.props.tipTwo}</div>
                        </div>
                    </div>
                    <div className="tips-box">
                        <div className="tip">
                            <i className="{this.props.smallGraphicThree}"></i>
                            <div>{this.props.tipThree}</div>
                        </div>
                    </div>
                    <div>{this.props.paragraph}</div>
                </div>
            </React.Fragment>
        )
    }
}