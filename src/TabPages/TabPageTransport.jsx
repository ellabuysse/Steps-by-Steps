import React, { Component } from 'react';

export default class TabPageTransport extends Component {
    constructor(props){ 
        super(props);
        this.state = {
            car: this.props.checkedCar
           
        }
        this.renderCarType = this.renderCarType.bind(this);
    }

    renderCarType() {
        return(
            <div className="quiz-container" id="car-types">
                <div className="quiz-question">
                    <span>Select which model of car you use most often: </span>
                </div>
                <div className="boxes">
                    <div className="check">
                        <input
                            type="checkbox"
                            name="regularCar"
                            id="regularCar"
                            onChange={this.onChange}
                            checked={this.state.formData.regularCar}
                        /> Standard 
                    </div>
                    <div className="check">
                        <input 
                            type="checkbox"
                            name="hybridCar"
                            id="hybridCar"
                            onChange={this.onChange}
                            checked={this.state.formData.hybridCar}
                        /> Hybrid
                    </div>
                    <div className="check">
                        <input
                            type="checkbox"
                            name="electricCar"
                            id="electricCar"
                            onChange={this.onChange}
                            checked={this.state.formData.electricCar}
                        /> Electric
                    </div>
                </div>
            </div>     
        )
    }
    
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
                                <div>
                                
                                </div>
                            </div>
                        </div>
                        {this.state.car ? this.renderCarType() : null}
                        
                        
                       </div>
                    
                    
        )
    }
}