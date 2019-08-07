import React, { Component } from 'react';
import userInfo from '../Data/userInfo';
import PastResult from './PastResult';

export default class PastQuizzes extends Component {
    render() {
        return (
            <div className="past-quizzes">
                {
                userInfo.map(value => (
                        <PastResult
                            resultScore={value.score}
                            resultTime={value.time}
                            key={value.time}   
                        />
                    ))
                }
            </div>
        )
    }
}