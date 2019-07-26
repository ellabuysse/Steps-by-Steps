import React, { Component } from 'react';
import { Tabs, TabLink, TabContent } from "react-tabs-redux";

export default class TabPageShopping extends Component {
    render(){
        return(
           <div>
                        <div className="quiz-container" id="shop-types">
                            <div className="quiz-question">
                                <span>Select where you shopped this week: </span>
                            </div>
                            <div className="boxes">
                                <div className="check">
                                    <input
                                        type="checkbox"
                                        name="thriftStore"
                                        id="thriftStore"
                                        onChange={this.props.onChange}
                                        checked={this.props.checkedThriftStore}
                                    /> Thrift store
                                </div>
                                <div className="check">
                                    <input 
                                        type="checkbox"
                                        name="farmersMarket"
                                        id="farmersMarket"
                                        onChange={this.props.onChange}
                                        checked={this.props.checkedFarmersMarket}
                                    /> Farmers market
                                </div>
                                <div className="check">
                                    <input
                                        type="checkbox"
                                        name="store"
                                        id="store"
                                        onChange={this.props.onChange}
                                        checked={this.props.checkedStore}
                                    /> Regular store
                                </div>
                            </div>
                        </div>
                        <div className="next-btn "><button className="new-tab">NEXT</button></div>
                    </div>
        )
        
        }
    }