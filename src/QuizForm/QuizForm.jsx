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
                vegan: false
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
        })
    }

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

                
                <button onClick={this.onSubmit}>submit</button>
                {this.state.submitted ? this.renderResponse() : null}
            </div>
        )
        }
    }
