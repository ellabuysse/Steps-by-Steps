import React, { Component } from 'react';
import userInfo from '../Data/userInfo';
import PastResult from './PastResult';


export default class PastQuizzes extends Component {
   
    render() {
        console.log("past quizzes");
        console.log(this.props.test);
        return (
            <div className="past-quizzes">
                {
                userInfo.map(value => (
                        <PastResult
                            quizName={value.name}
                            resultScore={value.score}
                            resultNum={value.num}
                            key={value.num}   
                        />
                    ))
                }
            </div>
        )
    }
}