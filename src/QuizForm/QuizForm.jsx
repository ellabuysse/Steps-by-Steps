import React, { Component } from 'react';
import Response from './Response';
import './QuizForm.css';

let totalPoints = 0;
export default class QuizForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                
                totalPoints: 0
            },
            submitted: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.renderResponse = this.renderResponse.bind(this);
    }

    onChange(event) {
        let formData = {...this.state.formData};
        formData[event.target.name] = event.target.value;
        this.setState({
            formData: formData
        })
    }

    onCarClick() {
        this.state.formData.totalPoints += 10;
    }

    onSubmit() {
        this.setState({
            submitted: true
        })
    }

    renderResponse() {
        return(
            <Response formResponse={this.state.formData}/>
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
                        name="Bus/Subway/Metro"
                        id="Bus/Subway/Metro"
                        onChange={this.onChange}
                        onClick = "onCarClicked()"
                    /> Bus/Subway/Metro
                    </div>
                    <div className="check">
                    <input 
                        type="checkbox"
                        name="Car"
                        id="Car"
                        onChange={this.onChange}
                        onClick = "onCarClicked()"
                    /> Car
                    </div>
                    <div className="check">
                    <input
                        type="checkbox"
                        name="Walking/Biking"
                        id="Walking/Biking"
                        onChange={this.onChange}
                        onClick = "onWalkBiked()"
                    /> Walk/Bike
                    </div>
                    </div>
                </div>
            
                
                {/* <label htmlFor="Last name">
                    <span>your comments</span>
                    <textarea
                        name="lastName"
                        id="lastName"
                        onChange={this.onChange}
                    />  
                </label> */}
                <button onClick={this.onSubmit}>submit</button>
                {this.state.submitted ? this.renderResponse() : null}
            </div>
        )
        }
    }
