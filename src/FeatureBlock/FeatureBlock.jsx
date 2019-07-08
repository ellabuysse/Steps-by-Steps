import React, { Component } from 'react';
import './FeatureBlock.css';
import './FeatureBox/FeatureBox';

export default class FeatureBlock extends Component {

    render() {
            backgroundImage id="mountain-bg": "url(" + "https://images.unsplash.com/photo-1500748851664-017ef7f22878?ixlib=rb-1.2.1&auto=format&fit=crop&w=2562&q=80" + ")";
            backgroundImage id="wheat-bg": "url(" + "https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" + ")";
            backgroundImage id="bike-bg": "url(" + "https://images.unsplash.com/photo-1557687790-902ede7ab58c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1243&q=80" + ")";
            backgroundImage id="food-bg": "url(" + "https://images.unsplash.com/photo-1544215830-1c67ed769a61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" + ")";
            backgroundImage id="buying-bg": "url(" + "https://images.pexels.com/photos/250400/pexels-photo-250400.jpeg?cs=srgb&dl=dawn-daylight-fog-250400.jpg&fm=jpg" + ")";
            backgroundImage id="utilities-bg": "url(" + "https://images.pexels.com/photos/450004/pexels-photo-450004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" + ")";

        return(
            <div>
                <div className="container" id="{this.props.bgImage}">
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
                </div>
                    <div>{this.props.paragraph}</div>

            </div>
        )
    }
}