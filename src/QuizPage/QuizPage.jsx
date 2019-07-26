import React from 'react';
import NavBar from '../NavBar/NavBar';
import BGImage from '../BGImage/BGImage';
import Footer from '../Footer/Footer';
import QuizForm from '../QuizForm/QuizForm';
import './QuizPage.css';

const QuizPage = (props) => {
    return (
     <div>
            <NavBar/>
           
            <div className="bg-image">
                
                    <div className="quiz-photo-container" style={{
                        
                    }}>
                            <div className="title"><strong>Environmental Impact Quiz</strong></div>
                        
                    </div>
                    </div>
                   
            <div className="page-container">
                <p className="quiz-item" id="quiz-description">Take our quiz to determine the impact you have on the environment. Evaluate yourself on the previous week and complete weekly to see how your steps for a reduced impact are making a difference. </p>
                <QuizForm/>
            </div>
             
        <Footer/>
        </div>

    );
};
export default QuizPage;