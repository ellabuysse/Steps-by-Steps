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
import { thisExpression } from '@babel/types';
import PastResult from "../StoreInfo/PastResult";


export default class QuizForm extends Component {

    constructor(props) {

        super(props);
        this.state = {
            quizzes: [],
            currentQuiz: {
                id: 0,
                userID: "",
                totalPoints: 0,
                transportPoints: 0,
                dietPoints: 0,
                shoppingPoints: 0,
                wastePoints: 0,
                powerPoints: 0,
                timestamp: 0
            },
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
            databaseURL: "https://stepsbysteps-backend.herokuapp.com",
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

    componentDidMount() {
        axios.get(this.state.databaseURL + "/quizzes/user/" + this.props.userID)
            .then((response) => {
                var quizzes = response.data;
                if (quizzes.length > 0) {
                    for (let i = 0; i < quizzes.length; i++) {
                        this.setState(prevState => ({
                            quizzes: [...prevState.quizzes, quizzes[i]]
                        }));
                    }
                }
            })
            .catch(function (error) {
                console.log("****\nERROR\n****");
                console.log(error);
            });
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

        axios.post(this.state.databaseURL + "/quizzes", {
            userID: this.props.userID,
            totalPoints: Math.round(total / count),
            transportPoints: transportPoints,
            dietPoints: dietPoints,
            shoppingPoints: shoppingPoints,
            wastePoints: wastePoints,
            powerPoints: powerPoints
        })
            .then((response) => {
                var newQuiz = response.data;
                this.setState(prevState => ({
                    submitted: true,
                    currentQuiz: {
                        id: newQuiz['id'],
                        userID: newQuiz['userID'],
                        totalPoints: newQuiz['totalPoints'],
                        transportPoints: newQuiz['transportPoints'],
                        dietPoints: newQuiz['dietPoints'],
                        shoppingPoints: newQuiz['shoppingPoints'],
                        wastePoints: newQuiz['wastePoints'],
                        powerPoints: newQuiz['powerPoints'],
                        timestamp: newQuiz['timestamp']
                    },
                    quizzes: [...prevState.quizzes, newQuiz]
                }))
            })
            .catch(function (error) {
                console.log("****\nERROR\n****");
                console.log(error);
            });
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
        let carChecked = this.state.formData.car;
        return (
            <TabContent for="tab1" name="tab1" >
                <TabPageTransport name="tab1"
                    onChange={this.onChange}

                    checkedPublicTransit={this.state.publicTransit}
                    checkedCar={carChecked}
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
                    checkedThriftStore={this.state.formData.thriftStore}
                    checkedFarmersMarket={this.state.formData.farmersMarket}
                    checkedStore={this.state.formData.store}
                    onClick={this.handleClickFour} />
            </TabContent>
        )
    }

    renderWaste() {
        return (
            <TabContent for="tab4" name="tab4">
                <TabPageWaste
                    onChange={this.onChange}
                    checkedRecycle={this.state.formData.recycle}
                    checkedCompost={this.state.formData.compost}
                    checkedReuse={this.state.formData.reuse}
                    checkedGarbage={this.state.formData.garbage}
                    onClick={this.handleClickFive}
                />
            </TabContent>
        )
    }
    renderPower() {
        return (

            <TabPagePower
                onChange={this.onChange}
                checkedAcHeat={this.state.formData.acHeat}
                checkedLights={this.state.formData.lights}
                checkedComputer={this.state.formData.computer}
                checkedWater={this.state.formData.water}
                checkedNone={this.state.formData.none} />

        )
    }

    changeQuiz = (id) => {
        let newQuiz = this.state.quizzes.find(object => object.id === id);
        this.setState(prevState => ({
            currentQuiz: {
                id: newQuiz['id'],
                userID: newQuiz['userID'],
                totalPoints: newQuiz['totalPoints'],
                transportPoints: newQuiz['transportPoints'],
                dietPoints: newQuiz['dietPoints'],
                shoppingPoints: newQuiz['shoppingPoints'],
                wastePoints: newQuiz['wastePoints'],
                powerPoints: newQuiz['powerPoints'],
                timestamp: newQuiz['timestamp']
            }
        }))
    }

    renderResponse = () => {
        let quiz = this.state.quizzes.find(object => object.id === this.state.currentQuiz);

        console.log(this.state.quizzes)
        return (
            <React.Fragment>
                <Response
                    totalPoints={this.state.currentQuiz.totalPoints}
                    transportPoints={this.state.currentQuiz.transportPoints}
                    dietPoints={this.state.currentQuiz.dietPoints}
                    shoppingPoints={this.state.currentQuiz.shoppingPoints}
                    wastePoints={this.state.currentQuiz.wastePoints}
                    powerPoints={this.state.currentQuiz.powerPoints}
                />

                <div className="past-quizzes-container">
                    <div id="past-quizzes-header">YOUR RECENT SCORES:</div>
                </div>

                <div className="past-quizzes">
                    {
                        this.state.quizzes.map(value => (
                            <PastResult
                                id={value.id}
                                totalPoints={value.totalPoints}
                                changeQuiz={this.changeQuiz}
                            />
                        ))
                    }
                </div>
            </React.Fragment>
        )
    };

    render() {
        return (
            <Tabs >
                <div className="quiz-item" id="quiz-tabs">
                    <div className="tab"><TabLink to="tab1" onClick={this.handleClickOne}>TRANSPORTATION</TabLink></div>
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
                                <a href="#results-page" className="submit-text" id="quiz-submit-btn">SUBMIT</a>
                            </button>
                        </div>
                        {this.state.submitted ? this.renderResponse() : null}
                    </TabContent>
                </div>

            </Tabs>
        )
    }
}
