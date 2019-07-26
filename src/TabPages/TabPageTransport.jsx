import React, { Component } from 'react';
import { Tabs, TabLink, TabContent } from "react-tabs-redux";

export default class TabPageTransport extends Component {
    render(){
        return(
                    <div>
                        <div className="quiz-container" id="transport-types">
                            <div className="quiz-question">
                                <span>Select all modes of transport you used this week: </span>
                            </div>
                            <div className="boxes">
                                <div className="check">
                                    <input
                                        type="checkbox"
                                        name="publicTransit"
                                        id="publicTransit"
                                        onChange={this.props.onChange}
                                        checked={this.props.checkedPublicTransit}
                                    /> Public transportation/Carpool
                                </div>
                                <div className="check">
                                    <input 
                                        type="checkbox"
                                        name="car"
                                        id="car"
                                        onChange={this.props.onChange}
                                        checked={this.props.checkedCar}
                                    /> Car        
                                </div>
                                <div className="check">
                                    <input
                                        type="checkbox"
                                        name="walkingBiking"
                                        id="walkingBiking"
                                        onChange={this.props.onChange}
                                        checked={this.props.checkedWalkingBiking}
                                    /> Walk/Bike
                                </div>
                            </div>
                        </div>
                       <button onClick={this.props.onClick}>Finish</button>
                        <div className="next-btn "><button className="new-tab" onPress={() => this.props.navigation.navigate("tab2")}>NEXT</button></div>
</div>
                    
                    
        )
    }
}