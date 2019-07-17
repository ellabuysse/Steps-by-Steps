import React, { Component } from 'react';
import Response from './Response';

export default class QuizForm extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            formData: {
                totalPoints: 0
            },
            submitted: false
        };
        // this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        // this.renderResponse = this.renderResponse.bind(this);
    }

    
    // onChange(event) {
    //     let formData = {...this.state.formData};
    //     formData[event.target.name] = event.target.value;
    //     this.setState({
    //         formData: formData
    //     })
    // }

    addPoints() {
        totalPoints += 10;
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
                <label htmlFor="transport-types">
                    <p>check all the forms of tranportation you used this week: </p>
                    <span>Bus/Subway/Metro</span>
                    <input type="checkbox"
                        name="Bus/Subway/Metro"
                        id="Bus/Subway/Metro"
                        onClick={this.addPoints}
                    />  
                    <span>Car</span>
                    <input type="checkbox"
                        name="Car"
                        id="Car"
                        onClick={this.addPoints}
                    /> 
                    <span>Walking/Biking</span>
                    <input type="checkbox"
                        name="Walking/Biking"
                        id="Walking/Biking"
                        onClick={this.addPoints}
                        
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
