import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import QuizForm from '../QuizForm/QuizForm';
import './QuizPage.css';
import Login from '../Login/Login';

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
  
               
                <Login/>
           
            </div>
             
        <Footer/>
        </div>
</div>
    );
};
export default QuizPage;