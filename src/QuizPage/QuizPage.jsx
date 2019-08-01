import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import QuizForm from '../QuizForm/QuizForm';
import './QuizPage.css';

const QuizPage = (props) => {
    return (
     <div>
            <NavBar/>
           <div className="quiz-page">
                   
          <div className="page-container">
            <div className="bg-image">
                
                    <div className="quiz-photo-container" >
                                    
                            <div className="title" id="quiz-title"><strong>Environmental Impact Quiz</strong></div>
                        
                    </div>
                    </div>
  
                <p className="quiz-item" id="quiz-description">Take our quiz to determine the impact you have on the environment. Evaluate yourself on the previous week and complete weekly to see how your steps for a reduced impact are making a difference. </p>
                <QuizForm/>
            </div>
             
        <Footer/>
        </div>
</div>
    );
};
export default QuizPage;