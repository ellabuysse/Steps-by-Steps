import React, { Component } from 'react';
import { Tabs, TabLink, TabContent } from "react-tabs-redux";

export default class TabPageDiet extends Component {
    render(){
        return(
<div>
                        <div className="quiz-container" id="diet-types">
                            <div className="quiz-question">
                                <span>Select which box best describes your diet: </span>
                            </div>
                            <div className="boxes">
                                <div className="check">
                                    <input
                                        type="checkbox"
                                        name="meatLover"
                                        id="meatLover"
                                        onChange={this.props.onChange}
                                        checked={this.props.checkedMeatLover}
                                    /> High meat consumption
                                </div>
                                <div className="check">
                                    <input 
                                        type="checkbox"
                                        name="omnivore"
                                        id="omnivore"
                                        onChange={this.props.onChange}
                                        checked={this.props.checkedOmnivore}
                                    /> Average omnivore 
                                </div>
                                <div className="check">
                                    <input
                                        type="checkbox"
                                        name="noRed"
                                        id="noRed"
                                        onChange={this.props.onChange}
                                        checked={this.props.checkedNoRed}
                                    /> No red meat
                                </div>
                                <div className="check">
                                    <input 
                                        type="checkbox"
                                        name="vegetarian"
                                        id="vegetarian"
                                        onChange={this.props.onChange}
                                        checked={this.props.checkedVegetarian}
                                    /> Vegetarian 
                                </div>
                                <div className="check">
                                    <input
                                        type="checkbox"
                                        name="vegan"
                                        id="vegan"
                                        onChange={this.props.onChange}
                                        checked={this.props.checkedVegan}
                                    /> Vegan
                                </div>
                            </div>
                        </div>
                        <div className="next-btn ">
                            <button className="new-tab">NEXT</button>
                            </div>
      </div>  )
        
    }
}