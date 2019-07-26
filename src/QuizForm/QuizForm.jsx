import React, { Component } from 'react';
import './QuizForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons' 
import './Response.css';
import DonutChart from 'react-donut-chart';
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import TabPageDiet from '../TabPages/TabPageDiet';
import TabPageTransport from '../TabPages/TabPageTransport';
import TabPagePower from '../TabPages/TabPagePower';
import TabPageWaste from '../TabPages/TabPageWaste';
import TabPageShopping from '../TabPages/TabPageShopping';
import Response from '../QuizForm/Response';

import {
    Link
} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import getResult from '../Data.getResult.js';
 
export default class QuizForm extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            selectedIndex: 0,
            activeTab: "1",
            formData: { 
                initialPage: 1,
                transportPoints: 0,
                dietPoints: 0,
                shoppingPoints: 0,
                wastePoints: 0,
                powerPoints: 0,
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
            submitted: false,
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.renderResponse = this.renderResponse.bind(this);
        this.handleButtonClick = this.renderResponse.bind(this);
    }

    get currentTab() {
        const { activeTab } = this.state;
        return `#tab${activeTab}`;
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
        let count = 0;

        let transportPoints= 0;
        let dietPoints= 0;
        let shoppingPoints= 0;
        let wastePoints= 0;
        let powerPoints= 0;

        let color = "";
        // getResult.map(value => (
            
        // ))
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
        this.state.formData.transportPoints = transportPoints;
        this.state.formData.dietPoints = dietPoints;
        this.state.formData.shoppingPoints = shoppingPoints;
        this.state.formData.wastePoints = wastePoints;
        this.state.formData.powerPoints = powerPoints;

   
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


        this.setState({
            submitted: true
        })
    }

    handleSelect = index => {
        this.setState({ activeTab: index });
    }
    handleButtonClick = () => {
        this.setState({ activeTab: 2 });
    }

    handleNextClick = key => {
        this.props.tab1.push('/${key}')
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

    renderResponse() {
        return(
            <div className="results-page">
            <Response
                totalPoints = {this.state.formData.totalPoints}
                transportPoints = {this.state.formData.transportPoints}
                dietPoints = {this.state.formData.dietPoints}
                shoppingPoints = {this.state.formData.shoppingPoints}
                wastePoints = {this.state.formData.wastePoints}
                powerPoints = {this.state.formData.powerPoints}/>
            </div>
            
        )
    }

    render() {
       return (
           
           <Tabs selectedIndex={this.state.selectedIndex} onSelect={this.handleSelect}>
            
        
                <div className="quiz-item" id="quiz-tabs">
                   <div className="tab"><TabLink to="tab1">TRANSPORTATION</TabLink></div>
                   <div className="tab"><TabLink to="tab2">DIET</TabLink></div>
                   <div className="tab"><TabLink to="tab3">SHOPPING</TabLink></div>
                   <div className="tab"><TabLink to="tab4">WASTE</TabLink></div>
                   <div className="tab"><TabLink to="tab5">POWER</TabLink></div>
            </div>
            
            <div className="quiz">
                <TabContent for="tab1">
                    <TabPageTransport
                        onChange={this.onChange}
                        checkedPublicTransit={this.state.publicTransit}
                        checkedCar={this.state.car}
                        checkedWalkingBiking={this.state.walkingBiking}
                        onClick={this.handleButtonClick}/>
                        </TabContent>
                <TabContent for="tab2" value="2">
                    <TabPageDiet 
            onChange={this.onChange} 
            checkedMeatLover={this.state.formData.meatLover}
            checkedOmnivore ={this.state.formData.omnivore}
            checkedNoRed ={this.state.formData.noRed}
            checkedVegetarian ={this.state.formData.vegetarian}
            checkedVegan ={this.state.formData.vegan}
            /></TabContent>

            <TabContent for="tab3">
                <TabPageShopping
                    onChange={this.onChange}
                    checkedThriftStore={this.state.thriftStore}
                    checkedFarmersMarket={this.state.farmersMarket}
                    checkedStore={this.state.store}/>
            </TabContent>

            <TabContent for="tab4">
                <TabPageWaste
                    onChange={this.onChange}
                    checkedRecycle={this.state.recycle}
                    checkedCompost={this.state.compost}
                    checkedReuse={this.state.reuse}
                    checkedGarbage={this.state.garbage}/>
            </TabContent>

<TabContent for="tab5">
    <TabPagePower
        onChange={this.onChange}
        checkedAcHeat={this.state.acHeat}
        checkedLights={this.state.lights}
        checkedComputer={this.state.computer}
        checkedWater={this.state.water}
        checkedNone={this.state.none}/>
        <div className = "submit">
<button onClick={this.onSubmit} className="submit-button">
    <AnchorLink href="#results-page" onClick={this.onSubmit} className="submit-text">SUBMIT</AnchorLink>
</button>
</div>
{this.state.submitted ? this.renderResponse() : null}

</TabContent>
                </div>
    
                
            </Tabs>
           
        )}
    }
