import React, { Component } from 'react';
//import Response from './Response';
import './QuizForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons' 
import './Response.css';

import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import { thisTypeAnnotation } from '@babel/types';
 
export default class QuizForm extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            formData: { 
<<<<<<< HEAD
                transportPoints: 0,
=======
>>>>>>> 37e31d3ab0fa0f9a485bf2c0e276ecc1501c5f95
                totalPoints: 0,
                dotColor: "ffffff",
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
            submitted: false,
            currentTab: "tab1"
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.renderResponse = this.renderResponse.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (value) => {
        this.setState ({
            currentTab: value,
        });
    };

    onChange(event) {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.checked;
        this.setState({
            formData: formData
        })
    }
    
    onSubmit() {
        let total = 0;
        let count = 0;

        let transportPoints= 0;
        let dietPoints= 0;
        let shoppingPoints= 0;
        let wastePoints= 0;
        let powerPoints= 0;

        let color = "";

        if (this.state.formData.publicTransit) {
            total += 8;
            count++;
            transportPoints++;
        }
        if (this.state.formData.regularCar) {
            total += 3;
            count++;
            transportPoints++;
        }
        if (this.state.formData.hybridCar) {
            total += 6;
            count++;
            transportPoints++;
        }
        if (this.state.formData.electricCar) {
            total += 6;
            count++;
            transportPoints++;
        }
        if (this.state.formData.walkingBiking) {
            total += 10;
            count++;
            transportPoints++;
        }
        if (this.state.formData.meatLover) {
            total += 1;
            count++;
            dietPoints++;
        }
        if (this.state.formData.omnivore) {
            total += 4;
            count++;
            dietPoints++;
        }
        if (this.state.formData.noRed) {
            total += 6;
            count++;
            dietPoints++;
        }
        if (this.state.formData.vegetarian) {
            total += 8;
            count++;
            dietPoints++;
        }
        if (this.state.formData.vegan) {
            total += 10;
            count++;
            dietPoints++;
        }
        if (this.state.formData.thriftStore) {
            total += 8;
            count++;
            shoppingPoints++;
        }
        if (this.state.formData.farmersMarket) {
            total += 10;
            count++;
            shoppingPoints++;
        }
        if (this.state.formData.store) {
            total += 4;
            count++;
            shoppingPoints++;
        }
        if (this.state.formData.recycle) {
            total += 8;
            count++;
            wastePoints++;
        }
        if (this.state.formData.compost) {
            total += 8;
            count++;
            wastePoints++;
        }
        if (this.state.formData.reuse) {
           total += 10;
           count++;
           wastePoints++;
        }
        if (this.state.formData.garbage) {
           total += 1;
           count++;
           wastePoints++;
        }
        if (this.state.formData.acHeat) {
           total += 8;
           count++;
           powerPoints++;
        }
        if (this.state.formData.lights) {
           total += 8;
           count++;
           powerPoints++;
        }
        if (this.state.formData.computer) {
           total += 8;
           count++;
           powerPoints++;
        }
        if (this.state.formData.water) {
           total += 8;
           count++;
           powerPoints++;
        }
        if (this.state.formData.none) {
           total += 1;
           count++;
           powerPoints++;
        }

        this.state.formData.totalPoints = Math.round(total/count);
<<<<<<< HEAD
        this.state.formData.transportPoints = transportPoints;
=======

        if (this.state.formData.totalPoints <= 3) {
            color="rgba(251, 86, 78, 0.62)"
        }
        if (this.state.formData.totalPoints > 3 && this.state.formData.totalPoints <= 7) {
            color="rgba(251, 170, 109, 0.72)"
        }
        if (this.state.formData.totalPoints > 7) {
            color="#6ecd9c"
        }

        this.state.formData.dotColor = color;

>>>>>>> 37e31d3ab0fa0f9a485bf2c0e276ecc1501c5f95
        this.setState({
            submitted: true
        })
    }

    renderCarType() {
        return(
           
            <div className="car-types">
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

    renderResponse() {
        return(
            <div className="results-page">
            <div className="results">
                <div className="total-pts-container">
                <h3 className="total-pts">Total impact points: </h3>
            </div>

               <div className="points-container">
                <div className="points" background-color={this.state.formData.dotColor}><span>{this.state.formData.totalPoints}</span></div>
            </div> 
            
            </div>
            <div className="categories-container">
                <FontAwesomeIcon icon={faCircle} id="red-dot"/>
                <div className="rating-scale" >1-3 indicates poor environmental impact</div>
                <FontAwesomeIcon icon={faCircle} id="yellow-dot"/>
                <div className="rating-scale" >4-7 indicates average environmental impact</div>
                <FontAwesomeIcon icon={faCircle} id="green-dot"/>
                <div className="rating-scale" >8-10 indicates above average environmental impact</div>
            </div>
               
            </div>
        )
    }

    render() {
       return (
           <Tabs>
               <div className="quiz-tabs">
                   <div className="tab"><TabLink to="tab1">TRANSPORTATION</TabLink></div>
                   <div className="tab"><TabLink to="tab2">DIET</TabLink></div>
                   <div className="tab"><TabLink to="tab3">SHOPPING</TabLink></div>
                   <div className="tab"><TabLink to="tab4">WASTE</TabLink></div>
                   <div className="tab"><TabLink to="tab5">POWER</TabLink></div>
            </div>
            
            <div className="quiz">

            <TabContent for="tab1" value="tab1">
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
                            /> Public transportation/Carpool
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
                       
                    </div></div>
                    {this.state.formData.car ? this.renderCarType() : null}
                    
                    <div className="next-btn"><button className="new-tab" onClick={()=>this.handleChange("tab2")}>NEXT</button></div>
</TabContent>

<TabContent for="tab2" value="tab2">
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
                    <div className="next-btn"><button className="new-tab" onClick={()=>this.handleChange("tab3")}>NEXT</button></div>
                    </TabContent>
                    <TabContent for="tab3" value="tab3">
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
                            /> Farmers market
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
                    
                    </div>
                    <div className="next-btn"><button className="new-tab" onClick={()=>this.handleChange("tab4")}>NEXT</button></div>
                    </TabContent>
                    <TabContent for="tab4" value="tab4">
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
                    </div>
                    <div className="next-btn"><button className="new-tab" onClick={()=>this.handleChange("tab5")}>NEXT</button></div>
                    </TabContent>
                    <TabContent for="tab5" value="tab5">
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
                    
           
                <div className = "submit">
                <button onClick={this.onSubmit} className="submit-button">SUBMIT</button>
                {this.state.submitted ? this.renderResponse() : null}
                </div>
           
            </TabContent>
             
             </div>   
             </Tabs>
            )}
    }

    
