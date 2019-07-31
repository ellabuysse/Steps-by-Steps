import React, { Component } from 'react';

export default class TabPageWaste extends Component {
    render(){
        return(
            <div>
                        <div className="quiz-container" id="waste-types">
                            <div className="quiz-question">
                                <span>Select how you got rid of waste this week: </span>
                            </div>
                            <div className="boxes">
                                <div className="check">
                                    <input
                                        type="checkbox"
                                        name="recycle"
                                        id="recycle"
                                        onChange={this.props.onChange}
                                        checked={this.props.checkedRecycle}
                                    /> Recycle
                                </div>
                                <div className="check">
                                    <input 
                                        type="checkbox"
                                        name="compost"
                                        id="compost"
                                        onChange={this.props.onChange}
                                        checked={this.props.checkedCompost}
                                    /> Compost
                                </div>
                                <div className="check">
                                    <input
                                        type="checkbox"
                                        name="reuse"
                                        id="reuse"
                                        onChange={this.props.onChange}
                                        checked={this.props.checkedReuse}
                                    /> Reuse
                                </div>
                                <div className="check">
                                    <input
                                        type="checkbox"
                                        name="garbage"
                                        id="garbage"
                                        onChange={this.props.onChange}
                                        checked={this.props.checkedGarbage}
                                    /> Garbage
                                </div>
                            </div>
                        </div> 
                        
                        </div>
        )
    }
}