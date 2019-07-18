import React, { Component } from 'react';
import Response from './Response';
import './QuizForm.css';

export default class QuizForm extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            formData: {
                totalPoints: 0,
                publicTransit: false,
                car: false,
                walkingBiking: false,
                meatLover: false,
                omnivore: false,
                noRed: false,
                vegetarian: false,
                vegan: false,
                thriftStore: false,
                farmersMarket: false,
                store: false,
                recycle: false,
                compost: false,
                reuse: false,
                garbage: false,
                acHeat: false,
                lights: false,
                computer: false,
                water: false,
                none: false
            },
            submitted: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.renderResponse = this.renderResponse.bind(this);
    }

    onChange(event) {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.checked;
    
        this.setState({
            formData: formData
        })}
    


    

    onSubmit() {
        let total = 0;
        if (this.state.formData.publicTransit) {
            total += 10;
        }
        else if (this.state.formData.car) {
            total -= 50;
        }
        else if (this.state.formData.walkingBiking) {
            total += 50;
        }
        else if (this.state.formData.meatLover) {
            total -= 10;
        }
        else if (this.state.formData.omnivore) {
            total += 5;
        }
        else if (this.state.formData.noRed) {
            total += 8;
        }
        else if (this.state.formData.vegetarian) {
            total += 9;
        }
        else if (this.state.formData.vegan) {
            total += 10;
        }
        else if (this.state.formData.thriftStore) {
            total += 40;
        }
        else if (this.state.formData.farmersMarket) {
            total += 20;
        }
        else if (this.state.formData.store) {
            total -= 30;
        }
        else if (this.state.formData.recycle) {
            total += 15;
        }
        else if (this.state.formData.compost) {
            total += 15;
        }
       else if (this.state.formData.reuse) {
           total += 20;
       }
       else if (this.state.formData.garbage) {
           total -= 20;
       }
       else if (this.state.formData.acHeat) {
           total += 65;
       }
       else if (this.state.formData.lights) {
           total += 65;
       }
       else if (this.state.formData.computer) {
           total += 25;
       }
       else if (this.state.formData.water) {
           total += 25;
       }
       else if (this.state.formData.none) {
           total -= 65;
       }

        this.state.formData.totalPoints = total;
        this.setState({
            submitted: true
        })
    }


    renderResponse() {
        return(
            <Response formResponse={this.state.formData.totalPoints}/>
        )
    }

    render() {
       return (
            <div>
                <div className="transport-types">
                    <div className="quiz-question">
                        <span>Select all modes of transport you used this week: </span>
                    </div>
                    <div className="boxes">
                        <div className="check">
                            <input
                                type="checkbox"
                                name="publicTransit"
                                id="publicTransit"
                                onChange={this.onChange}
                                checked={this.state.formData.publicTransit}
                            /> Bus/Subway/Metro
                        </div>
                        <div className="check">
                            <input 
                                type="checkbox"
                                name="car"
                                id="car"
                                onChange={this.onChange}
                                checked={this.state.formData.car}
                            /> Car
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                name="walkingBiking"
                                id="walkingBiking"
                                onChange={this.onChange}
                                checked={this.state.formData.walkingBiking}
                            /> Walk/Bike
                        </div>
                    </div>

               

                <div className="diet-types">
                    <div className="quiz-question">
                        <span>Select which box best describes your diet: </span>
                    </div>
                    <div className="boxes">
                        <div className="check">
                            <input
                                type="checkbox"
                                name="meatLover"
                                id="meatLover"
                                onChange={this.onChange}
                                checked={this.state.formData.meatLover}
                            /> High meat consumption
                        </div>
                        <div className="check">
                            <input 
                                type="checkbox"
                                name="omnivore"
                                id="omnivore"
                                onChange={this.onChange}
                                checked={this.state.formData.omnivore}
                            /> Average omnivore 
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                name="noRed"
                                id="noRed"
                                onChange={this.onChange}
                                checked={this.state.formData.noRed}
                            /> No red meat
                        </div>
                        <div className="check">
                            <input 
                                type="checkbox"
                                name="vegetarian"
                                id="vegetarian"
                                onChange={this.onChange}
                                checked={this.state.formData.vegetarian}
                            /> Vegetarian 
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                name="vegan"
                                id="vegan"
                                onChange={this.onChange}
                                checked={this.state.formData.vegan}
                            /> Vegan
                        </div>
                    </div>
                    </div>

                    <div className="shop-types">
                    <div className="quiz-question">
                        <span>Select where you shopped this week: </span>
                    </div>
                    <div className="boxes">
                        <div className="check">
                            <input
                                type="checkbox"
                                name="thriftStore"
                                id="thriftStore"
                                onChange={this.onChange}
                                checked={this.state.formData.thriftStore}
                            /> Thrift store
                        </div>
                        <div className="check">
                            <input 
                                type="checkbox"
                                name="farmersMarket"
                                id="farmersMarket"
                                onChange={this.onChange}
                                checked={this.state.formData.farmersMarket}
                            /> Farmers Market
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                name="store"
                                id="store"
                                onChange={this.onChange}
                                checked={this.state.formData.store}
                            /> Regular store
                        </div>
                    </div>

                    <div className="waste-types">
                    <div className="quiz-question">
                        <span>Select how you got rid of waste this week: </span>
                    </div>
                    <div className="boxes">
                        <div className="check">
                            <input
                                type="checkbox"
                                name="recycle"
                                id="recycle"
                                onChange={this.onChange}
                                checked={this.state.formData.recycle}
                            /> Recycle
                        </div>
                        <div className="check">
                            <input 
                                type="checkbox"
                                name="compost"
                                id="compost"
                                onChange={this.onChange}
                                checked={this.state.formData.compost}
                            /> Compost
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                name="reuse"
                                id="reuse"
                                onChange={this.onChange}
                                checked={this.state.formData.reuse}
                            /> Reuse
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                name="garbage"
                                id="garbage"
                                onChange={this.onChange}
                                checked={this.state.formData.garbage}
                            /> Garbage
                        </div>
                    </div>
                    <div className="waste-types">
                    <div className="quiz-question">
                        <span>Select what you powered off when you left your house this week: </span>
                    </div>
                    <div className="boxes">
                        <div className="check">
                            <input
                                type="checkbox"
                                name="acHeat"
                                id="acHeat"
                                onChange={this.onChange}
                                checked={this.state.formData.acHeat}
                            /> Air conditioning/heating
                        </div>
                        <div className="check">
                            <input 
                                type="checkbox"
                                name="lights"
                                id="lights"
                                onChange={this.onChange}
                                checked={this.state.formData.lights}
                            /> Lights
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                name="computer"
                                id="computer"
                                onChange={this.onChange}
                                checked={this.state.formData.computer}
                            /> Computer monitor
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                name="water"
                                id="water"
                                onChange={this.onChange}
                                checked={this.state.formData.water}
                            /> Water
                        </div>
                        <div className="check">
                            <input
                                type="checkbox"
                                name="none"
                                id="none"
                                onChange={this.onChange}
                                checked={this.state.formData.none}
                            /> Nothing
                        </div>
                    </div>
                </div>
</div>
</div>
           </div>
                <div className = "submit">
                <button onClick={this.onSubmit}>submit</button>
                {this.state.submitted ? this.renderResponse() : null}
                </div>
            </div>
        
                 
                  
                
            
            )}
    }
