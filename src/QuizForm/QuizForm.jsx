import React, { Component } from 'react';
import Response from './Response';

export default class QuizForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                posAction: '',
                negAction: ''
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
        let totalPoints = 0;
        return (
            <div>
                <label htmlFor="transport-types">
                    <span>check all the forms of tranportation you used this week: </span>
                    <checkbox
                        name="Bus/Subway/Metro"
                        id="Bus/Subway/Metro"
                        onChange={this.onChange}
                    />  
                    <checkbox
                        name="Car"
                        id="Car"
                        onChange={this.onChange}
                    /> 
                    <checkbox
                        name="Walking/Biking"
                        id="Walking/Biking"
                        onChange={this.onChange}
                    /> 
                </label>
                
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
