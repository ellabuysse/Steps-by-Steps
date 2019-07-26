import React, { Component } from 'react';

export default class TabPagePower extends Component {
    render(){
        return(
            <div>
            <div className="quiz-container" id="waste-types">
                <div className="quiz-question">
                    <span>Select what you powered off when you left your house this week: </span>
                </div>
                <div className="boxes">
                    <div className="check">
                        <input
                            type="checkbox"
                            name="acHeat"
                            id="acHeat"
                            onChange={this.props.onChange}
                            checked={this.props.checkedAcHeat}
                        /> Air conditioning/heating
                    </div>
                    <div className="check">
                        <input 
                            type="checkbox"
                            name="lights"
                            id="lights"
                            onChange={this.props.onChange}
                            checked={this.props.checkedLights}
                        /> Lights
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="computer"
                            id="computer"
                            onChange={this.props.onChange}
                            checked={this.props.checkedComputer}
                        /> Computer monitor
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="water"
                            id="water"
                            onChange={this.props.onChange}
                            checked={this.props.checkedWater}
                        /> Water
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="none"
                            id="none"
                            onChange={this.props.onChange}
                            checked={this.props.checkedNone}
                        /> Nothing
                    </div>
            </div>
            </div>
             </div>
            )
            }
            }