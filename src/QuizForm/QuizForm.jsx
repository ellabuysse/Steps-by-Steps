import React, { Component } from 'react';
import axios from 'axios';
import './QuizForm.css';
import './Response.css';
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import TabPageDiet from '../TabPages/TabPageDiet';
import TabPageTransport from '../TabPages/TabPageTransport';
import TabPagePower from '../TabPages/TabPagePower';
import TabPageWaste from '../TabPages/TabPageWaste';
import TabPageShopping from '../TabPages/TabPageShopping';
import Response from '../QuizForm/Response';
// import console from 'console';
import { thisExpression } from '@babel/types';

export default class QuizForm extends Component {

    constructor(props) {

        super(props);
        this.state = {
            quizzes: [],

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
        this.handleButtonClick = this.handleButtonClick.bind(this);
        this.handleClickOne = this.handleClickOne.bind(this);
        this.handleClickTwo = this.handleClickTwo.bind(this);
        this.handleClickThree = this.handleClickThree.bind(this);
        this.handleClickFour = this.handleClickFour.bind(this);
        this.handleClickFive = this.handleClickFive.bind(this);
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

        })
    }

    onSubmit() {
        let total = 0;
        let count = 0;

        let transportPoints = 0;
        let dietPoints = 0;
        let shoppingPoints = 0;
        let wastePoints = 0;
        let powerPoints = 0;

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
            totalPoints: Math.round(total / count),
            transportPoints: transportPoints,
            dietPoints: dietPoints,
            shoppingPoints: shoppingPoints,
            wastePoints: wastePoints,
            powerPoints: powerPoints
        });

        var databaseURL = "https://stepsbysteps-backend.herokuapp.com";

        axios.post(databaseURL + "/quizzes", { 
            userID: "1",
            totalPoints: this.state.totalPoints,
            transportPoints: this.state.transportPoints,
            dietPoints: this.state.dietPoints,
            shoppingPoints: this.state.shoppingPoints,
            wastePoints: this.state.wastePoints,
            powerPoints: this.state.powerPoints
        })

        .then(function(response) {
            console.log('success');
        })

        .catch(function(error) {
            console.log("****\nERROR\n****");
            console.log(error);
        })
        
        axios.get(databaseURL + "/quizzes/user/1")

        .then(function(response) {
            console.log('success');
            // console.log(response.data);

            this.state.quizzes = [];
            var quizzes = response.data;
            for (let i = 0; i < quizzes.length; i++) {
                console.log(quizzes[i])
                // var joinedQuizzes = this.state.quizzes.concat(quizzes[i]);
                // this.setState({quizzes: joinedQuizzes});
                this.setState(prevState => ({
                    quizzes: [prevState.quizzes, quizzes[i]]
                }));
            }

            console.log(this.state.quizzes);
            // id = data[0]['id'];
        })
        
        .catch(function(error) {
            console.log("****\nERROR\n****");
            console.log(error);
        })

        this.setState({
            submitted: true
        })
    }


    handleButtonClick = (event) => {
        let newValue = event.target.name;
        this.setState({ page: newValue });
        alert('selected ' + newValue);
    }

    handleClickOne(event) {

        this.setState({ page: "tab1" });


    }
    handleClickTwo(event) {

        this.setState({ page: "tab2" });

    }
    handleClickThree(event) {

        this.setState({ page: "tab3" });

    }
    handleClickFour(event) {

        this.setState({ page: "tab4" });

    }
    handleClickFive(event) {

        this.setState({ page: "tab5" });

    }
    renderTransport() {
        return (

            <TabContent for="tab1" name="tab1" >
                <TabPageTransport name="tab1"
                    onChange={this.onChange}
                    checkedPublicTransit={this.state.publicTransit}
                    checkedCar={this.state.car}
                    checkedWalkingBiking={this.state.walkingBiking}
                />
            </TabContent>
        )
    }

    renderDiet() {
        return (
            <TabContent for="tab2" name="tab2" >

                <TabPageDiet name="tab2"
                    onChange={this.onChange}
                    checkedMeatLover={this.state.formData.meatLover}
                    checkedOmnivore={this.state.formData.omnivore}
                    checkedNoRed={this.state.formData.noRed}
                    checkedVegetarian={this.state.formData.vegetarian}
                    checkedVegan={this.state.formData.vegan}
                    onClick={this.handleClickThree}

                />

            </TabContent>
        )
    }
    renderShopping() {
        return (
            <TabContent for="tab3" name="tab3">
                <TabPageShopping
                    onChange={this.onChange}
                    checkedThriftStore={this.state.thriftStore}
                    checkedFarmersMarket={this.state.farmersMarket}
                    checkedStore={this.state.store}
                    onClick={this.handleClickFour} />
            </TabContent>
        )
    }

    renderWaste() {
        return (
            <TabContent for="tab4" name="tab4">
                <TabPageWaste
                    onChange={this.onChange}
                    checkedRecycle={this.state.recycle}
                    checkedCompost={this.state.compost}
                    checkedReuse={this.state.reuse}
                    checkedGarbage={this.state.garbage}
                    onClick={this.handleClickFive}
                />
            </TabContent>
        )
    }
    renderPower() {
        return (

            <TabPagePower
                onChange={this.onChange}
                checkedAcHeat={this.state.acHeat}
                checkedLights={this.state.lights}
                checkedComputer={this.state.computer}
                checkedWater={this.state.water}
                checkedNone={this.state.none} />

        )
    }

    renderResponse = (value) => {
        return (

            <Response
                // quiz={this.state.quizzes[value]}
                totalPoints={this.state.totalPoints}
                transportPoints={this.state.quizzes[value].transportPoints}
                dietPoints={this.state.quizzes[value].dietPoints}
                shoppingPoints={this.state.quizzes[value].shoppingPoints}
                wastePoints={this.state.quizzes[value].wastePoints}
                powerPoints={this.state.quizzes[value].powerPoints} 
            />

        )
    }

    render() {

        return (




            <Tabs >


                <div className="quiz-item" id="quiz-tabs">
                    <div className="tab" ><TabLink to="tab1" onClick={this.handleClickOne}
                    >
                        TRANSPORTATION</TabLink></div>
                    <div className="tab"><TabLink to="tab2" onClick={this.handleClickTwo} >DIET</TabLink></div>
                    <div className="tab"><TabLink to="tab3" onClick={this.handleClickThree}>SHOPPING</TabLink></div>
                    <div className="tab"><TabLink to="tab4" onClick={this.handleClickFour}>WASTE</TabLink></div>
                    <div className="tab"><TabLink to="tab5" onClick={this.handleClickFive}>POWER</TabLink></div>
                </div>

                {this.state.page === "tab1" ? [this.renderTransport(), <div className="next-btn"><TabLink className="new-tab" to="tab2" onClick={this.handleClickTwo} >NEXT</TabLink></div>] : null}

                {this.state.page === "tab2" ? [this.renderDiet(), <div className="next-btn"><TabLink className="new-tab" to="tab3" onClick={this.handleClickThree}>NEXT</TabLink></div>] : null}

                {this.state.page === "tab3" ? [this.renderShopping(), <div className="next-btn"><TabLink className="new-tab" to="tab4" onClick={this.handleClickFour}>NEXT</TabLink></div>] : null}

                {this.state.page === "tab4" ? [this.renderWaste(), <div className="next-btn"><TabLink className="new-tab" to="tab5" onClick={this.handleClickFive}>NEXT</TabLink></div>] : null}


                <div className="quiz">

                    <TabContent for="tab5" name="tab5">
                        {this.renderPower()}
                        <div className="submit">
                            <button onClick={this.onSubmit} className="submit-button">
                                <a href="#results-page" onClick={this.onSubmit} className="submit-text" id="quiz-submit-btn">SUBMIT</a>
                            </button>
                        </div>
                        {this.state.submitted ? this.renderResponse(0) : null}
                    </TabContent>
                </div>

            </Tabs>
        )
    }
}
