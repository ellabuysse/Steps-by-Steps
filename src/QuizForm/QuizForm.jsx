import React, { Component } from 'react';
import './QuizForm.css';
import './Response.css';
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import TabPageDiet from '../TabPages/TabPageDiet';
import TabPageTransport from '../TabPages/TabPageTransport';
import TabPagePower from '../TabPages/TabPagePower';
import TabPageWaste from '../TabPages/TabPageWaste';
import TabPageShopping from '../TabPages/TabPageShopping';
import Response from '../QuizForm/Response';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import getResult from '../Data.getResult.js';
 
export default class QuizForm extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            
            transportPoints: 0,
                dietPoints: 0,
                shoppingPoints: 0,
                wastePoints: 0,
                powerPoints: 0,
                totalPoints: 0,
            formData: { 
                
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
            page: "tab1"
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
            formData: formData,
            page: event.target.name
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
    
        this.setState({
            totalPoints: Math.round(total/count),
            transportPoints: transportPoints,
            dietPoints: dietPoints,
            shoppingPoints: shoppingPoints,
            wastePoints: wastePoints,
            powerPoints: powerPoints
        });
        

   
        if (this.state.formData.totalPoints <= 3) {
            color="rgba(251, 86, 78, 0.62)"
        }
        if (this.state.formData.totalPoints > 3 && this.state.formData.totalPoints <= 7) {
            color="rgba(251, 170, 109, 0.72)"
        }
        if (this.state.formData.totalPoints > 7) {
            color="#6ecd9c"
        }

       
        this.setState({
            submitted: true
        })
    }

   
    handleButtonClick = (event) => {
        let newValue = event.target.name;
        this.setState({ page: newValue });
        
    }
    renderDiet(){
        return(
            <div>
                <a href="tab2"/>
            </div>
            
        )
    }
    renderShopping(){
        return(
        <TabContent for="tab3" name="tab3">
                <TabPageShopping
                    onChange={this.onChange}
                    checkedThriftStore={this.state.thriftStore}
                    checkedFarmersMarket={this.state.farmersMarket}
                    checkedStore={this.state.store}
                    onClick={this.handleButtonClick}/>
            </TabContent>
        )
    }

    renderWaste(){
        return(
            <TabContent for="tab4" name="tab4">
                <TabPageWaste
                    onChange={this.onChange}
                    checkedRecycle={this.state.recycle}
                    checkedCompost={this.state.compost}
                    checkedReuse={this.state.reuse}
                    checkedGarbage={this.state.garbage}
                    onClick={this.handleButtonClick}
                    name="tab4"/>
            </TabContent>
        )
    }
    renderPower(){
        return(
            <TabContent for="tab5" name="tab5">
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
        )
    }


    

    renderResponse() {
        return(
            <div className="results-page">
            <Response
                totalPoints = {this.state.totalPoints}
                transportPoints = {this.state.transportPoints}
                dietPoints = {this.state.dietPoints}
                shoppingPoints = {this.state.shoppingPoints}
                wastePoints = {this.state.wastePoints}
                powerPoints = {this.state.powerPoints}/>
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
                <TabContent for="tab1" name="tab1">

                    <TabPageTransport
                        onChange={this.onChange}
                        checkedPublicTransit={this.state.publicTransit}
                        checkedCar={this.state.car}
                        checkedWalkingBiking={this.state.walkingBiking}
                        onClick={this.handleButtonClick}/>
                        </TabContent>
<div id="tab2">
                <TabContent for="tab2" name="tab2">
                    <TabPageDiet 
            onChange={this.onChange} 
            checkedMeatLover={this.state.formData.meatLover}
            checkedOmnivore ={this.state.formData.omnivore}
            checkedNoRed ={this.state.formData.noRed}
            checkedVegetarian ={this.state.formData.vegetarian}
            checkedVegan ={this.state.formData.vegan}
            onClick={this.handleButtonClick}/>
            </TabContent>
</div>
<div id="tab3">

            <TabContent for="tab3" name="tab3">
                <TabPageShopping
                    onChange={this.onChange}
                    checkedThriftStore={this.state.thriftStore}
                    checkedFarmersMarket={this.state.farmersMarket}
                    checkedStore={this.state.store}
                    onClick={this.handleButtonClick}/>
            </TabContent>
</div>
<div id="tab4">
            <TabContent for="tab4" name="tab4">
                <TabPageWaste
                    onChange={this.onChange}
                    checkedRecycle={this.state.recycle}
                    checkedCompost={this.state.compost}
                    checkedReuse={this.state.reuse}
                    checkedGarbage={this.state.garbage}
                    onClick={this.handleButtonClick}/>
            </TabContent>
</div>
<div id="tab5">


<TabContent for="tab5" name="tab5">
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

{this.state.page === "tab1" ? this.renderDiet() : null}
{this.state.page === "tab2" ? this.renderShopping() : null}
{this.state.page === "tab3" ? this.renderWaste() : null}
{this.state.page === "tab4" ? this.renderPower() : null}


 
              </div>
    
                
            </Tabs>
                  )}
    }
