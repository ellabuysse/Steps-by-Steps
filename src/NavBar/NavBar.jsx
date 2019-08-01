import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
/* 
    constructor(props){
        super(props)
        this.state ={
            firstButton: false,
            secondButton: false
        }
        this.handleClickFirst = this.handleClickFirst.bind(this);
        this.handleClickSecond = this.handleClickSecond.bind(this);

        
    }
    handleClickFirst(){
        this.setState({
            firstButton: true,
            secondButton: false
        })
    }
    handleClickSecond(){
        this.setState({
            firstButton: false,
            secondButton: true
        })
    }
   */
    render() {
        let pageName=window.location.pathname;
        pageName=pageName.substr(1);

        return(
            <header className={pageName}>
                <nav className= "pages-nav">
                    <div className="nav-title">
                        <Link to="/">Steps by Steps</Link>
                    </div>
                    <div className="nav-menu">
                        <div className="nav-links" >
                            <div id="whyThisMattersPage">
                        <Link to="/why-this-matters" >
                            why it matters 
                        </Link>
                        </div></div>
                        <div className="nav-links" >
                            <div  id="tips-page">
                        <Link to="/tips">
                            what you can do
                            </Link>  </div></div>
                            <div className="nav-links-quiz">
                        <Link to="/quiz" className="quiz-box" id="quizPage">
                            <div className= "take-quiz">
                            take the quiz</div></Link>
                      </div>
                    </div>
                </nav>
</header>
        )
    }
}