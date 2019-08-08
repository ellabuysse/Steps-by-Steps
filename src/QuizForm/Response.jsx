import React, { Component } from 'react';
import DonutChart from 'react-donut-chart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './QuizForm.css';
import './Response.css';
import PastQuizzes from '../StoreInfo/PastQuizzes';

export default class Response extends Component {
    render() {
        return (
            <div className="results-page" id="results-page">
                <div className="results">

                    <div className="total-pts-container">
                        <h3 className="total-pts">Total Impact Points: </h3>
                    </div>

                    <div className="points-container">
                        <div className="points" style={{
                            backgroundColor:
                                this.props.totalPoints <= 3 ?
                                    "#6ecd9c " :
                                    this.props.totalPoints <= 7 ?
                                        "rgba(251, 170, 109, 0.72)" :
                                        "rgba(251, 86, 78, 0.62)"
                        }}>
                            <span>{this.props.totalPoints}</span>
                        </div>
                    </div>

                    <div className="categories-container">
                        <div className="score-range">
                            <FontAwesomeIcon icon={faCircle} id="green-dot"/>
                            <div className="rating-scale" >1-3 indicates better environmental impact</div>
                        </div>
                        <div className="score-range">
                            <FontAwesomeIcon icon={faCircle} id="yellow-dot"/>
                            <div className="rating-scale" >4-7 indicates average environmental impact</div>
                        </div>
                        <div className="score-range">
                            <FontAwesomeIcon icon={faCircle} id="red-dot" />
                            <div className="rating-scale" >8-10 indicates poor environmental impact</div>
                        </div>
                    </div>

                </div>

                <div className="results-container">
                    <div className="chart-container">
                        <h3 className="breakdown-words">IMPACT BREAKDOWN</h3>

                        <DonutChart className="donutChart"
                            data={[{
                                label: 'TRANSPORTATION',
                                value: this.props.transportPoints
                            },
                            {
                                label: 'DIET',
                                value: this.props.dietPoints
                            },
                            {
                                label: 'SHOPPING',
                                value: this.props.shoppingPoints
                            },
                            {
                                label: 'WASTE',
                                value: this.props.wastePoints
                            },
                            {
                                label: 'POWER',
                                value: this.props.powerPoints
                            }
                            ]}
                            colors={[
                                '#6ecd9c', 'rgb(111, 154, 255)', 'rgba(251, 170, 109, 1)', 'rgba(251, 60, 54, 0.6)', 'rgba(123, 244, 251, 0.49)'
                            ]}
                        />
                    </div>

                    <div className="results-focus">
                        <h3 className="breakdown-words">THIS WEEK'S FOCUS</h3>
                        {(this.props.totalPoints <= 3) ?
                            <h3 className="results-description">Look at your largest percentage of impact and commit to changing one aspect of your lifestyle to reduce it. Over this week, evaluate your changes and make an effort to add them to your routine.</h3> :
                            <div>
                                {(this.props.totalPoints <= 7) ? <h3 className="results-description">You are taking some steps to reduce your impact but have room to improve. Focus on one action you can add to your every-day routine and record each time you complete it this week. You've got this!</h3> :
                                <h3 className="results-description">Take some time this week to think about your environmental impact. Change begins with evaluating your day to day actions and taking small steps to improve them, so commit to taking one small step a day to lessen your impact. You can do this!</h3>}
                            </div>}
                        
                        <div className="learn-more">
                            <Link to="/tips" id="results-link" href="#top" ignorescrollbehavior>LEARN MORE</Link>  
                        </div>
                    </div>
                </div>
                <div className="past-quizzes-container">
                    <div id="past-quizzes-header">YOUR IMPACT RECORD:</div>
                    <PastQuizzes 
                        className="past-quizzes"
                        test="test"
                    />
                </div>
            </div>
        )
    }
}