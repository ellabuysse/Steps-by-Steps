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
            total += 3;
            count++;
            transportPoints++;
        }
        if (this.state.formData.regularCar) {
            total += 9;
            count++;
            transportPoints++;
        }
        if (this.state.formData.hybridCar) {
            total += 7;
            count++;
            transportPoints++;
        }
        if (this.state.formData.electricCar) {
            total += 7;
            count++;
            transportPoints++;
        }
        if (this.state.formData.walkingBiking) {
            total += 1;
            count++;
            transportPoints++;
        }
        if (this.state.formData.meatLover) {
            total += 9;
            count++;
            dietPoints++;
        }
        if (this.state.formData.omnivore) {
            total += 6;
            count++;
            dietPoints++;
        }
        if (this.state.formData.noRed) {
            total += 4;
            count++;
            dietPoints++;
               }
        if (this.state.formData.vegetarian) {
            total += 3;
            count++;
            dietPoints++;
        }
        if (this.state.formData.vegan) {
            total += 1;
            count++;
            dietPoints++;
        }
        if (this.state.formData.thriftStore) {
            total += 5;
            count++;
            shoppingPoints++;
        }
        if (this.state.formData.farmersMarket) {
            total += 3;
            count++;
            shoppingPoints++;
        }
        if (this.state.formData.store) {
            total += 7;
            count++;
            shoppingPoints++;
        }
        if (this.state.formData.recycle) {
            total += 3;
            count++;
            wastePoints++;
        }
        if (this.state.formData.compost) {
            total += 1;
            count++;
            wastePoints++;
        }
        if (this.state.formData.reuse) {
           total += 1;
           count++;
           wastePoints++;
        }
        if (this.state.formData.garbage) {
           total += 8;
           count++;
           wastePoints++;
        }
        if (this.state.formData.acHeat) {
           total += 3;
           count++;
           powerPoints++;
        }
        if (this.state.formData.lights) {
           total += 3;
           count++;
           powerPoints++;
        }
        if (this.state.formData.computer) {
           total += 3;
           count++;
           powerPoints++;
        }
        if (this.state.formData.water) {
           total += 3;
           count++;
           powerPoints++;
        }
        if (this.state.formData.none) {
           total += 10;
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
            color="#6ecd9c"
        }
        if (this.state.formData.totalPoints > 3 && this.state.formData.totalPoints <= 7) {
            color="rgba(251, 170, 109, 0.72)"
        }
        if (this.state.formData.totalPoints > 7) {
            color="rgba(251, 86, 78, 0.62)"
        }

       
        this.setState({
            submitted: true
        })
    }

   
    handleButtonClick = (event) => {
        let newValue = event.target.name;
        this.setState({ page: newValue });
        alert('selected ' + newValue);
    }

    renderTransport(){
        return(
           
        <TabPageTransport name="tab1"
                        onChange={this.onChange}
                        checkedPublicTransit={this.state.publicTransit}
                        checkedCar={this.state.car}
                        checkedWalkingBiking={this.state.walkingBiking}
                        onClick={this.handleButtonClick}/>
                        
        
        )}
     
    renderDiet(){
        return(
   
                <TabPageDiet name="tab2"
            onChange={this.onChange} 
            checkedMeatLover={this.state.formData.meatLover}
            checkedOmnivore ={this.state.formData.omnivore}
            checkedNoRed ={this.state.formData.noRed}
            checkedVegetarian ={this.state.formData.vegetarian}
            checkedVegan ={this.state.formData.vegan}
            onClick={this.handleButtonClick}/>
 
            
        )
    }
    renderShopping(){
        return(

                <TabPageShopping
                    onChange={this.onChange}
                    checkedThriftStore={this.state.thriftStore}
                    checkedFarmersMarket={this.state.farmersMarket}
                    checkedStore={this.state.store}
                    onClick={this.handleButtonClick}/>
  
        )
    }

    renderWaste(){
        return(
            
                <TabPageWaste
                    onChange={this.onChange}
                    checkedRecycle={this.state.recycle}
                    checkedCompost={this.state.compost}
                    checkedReuse={this.state.reuse}
                    checkedGarbage={this.state.garbage}
                    onClick={this.handleButtonClick}
                    name="tab4"/>
      
                   
        )
    }
    renderPower(){
        return(
            
    <TabPagePower
        onChange={this.onChange}
        checkedAcHeat={this.state.acHeat}
        checkedLights={this.state.lights}
        checkedComputer={this.state.computer}
        checkedWater={this.state.water}
        checkedNone={this.state.none}/>

        )
    }


    

    renderResponse() {
        return(
           
            <Response
                totalPoints = {this.state.totalPoints}
                transportPoints = {this.state.transportPoints}
                dietPoints = {this.state.dietPoints}
                shoppingPoints = {this.state.shoppingPoints}
                wastePoints = {this.state.wastePoints}
                powerPoints = {this.state.powerPoints}/>

        )
    }

    render() {
    
       return (
            
           <Tabs selectedIndex={this.state.selectedIndex} onSelect={this.handleSelect} activeKey={this.state.key} onSelect={this.handleSelect}>
            
  
                <div className="quiz-item" id="quiz-tabs">
                   <div className="tab"><TabLink to="tab1">TRANSPORTATION</TabLink></div>
                   <div className="tab"><TabLink to="tab2">DIET</TabLink></div>
                   <div className="tab"><TabLink to="tab3">SHOPPING</TabLink></div>
                   <div className="tab"><TabLink to="tab4">WASTE</TabLink></div>
                   <div className="tab"><TabLink to="tab5">POWER</TabLink></div>
                </div>
            

            <div className="quiz">
                <TabContent for="tab1" name="tab1" eventKey={1}>
                    {this.renderTransport()}
               
                   
                        </TabContent>

                <TabContent for="tab2" name="tab2" >
                    {this.renderDiet()}
             </TabContent>


            <TabContent for="tab3" name="tab3">
                {this.renderShopping()}
            </TabContent>

            <TabContent for="tab4" name="tab4">
                {this.renderWaste()}
            </TabContent>



<TabContent for="tab5" name="tab5">
    {this.renderPower()}
        <div className = "submit">
<button onClick={this.onSubmit} className="submit-button">
    <a href="#results-page" onClick={this.onSubmit} className="submit-text">SUBMIT</a>
</button>
</div>
{this.state.submitted ? this.renderResponse() : null}
</TabContent>
</div>

{this.state.page === "tab2" ? this.renderDiet() : null}
{this.state.page === "tab2" ? this.renderShopping() : null}
{this.state.page === "tab3" ? this.renderWaste() : null}
{this.state.page === "tab4" ? this.renderPower() : null}


 
              
    
                
            </Tabs>    
       )}
    }
