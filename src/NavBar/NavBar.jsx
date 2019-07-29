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
                        <div className="nav-links">
                        <Link to="/why-this-matters" id="whyThisMattersPage">
                            why it matters 
                        </Link>
                        </div>
                        <div className="nav-links">
                        <Link to="/tips" id="tipsPage">
                            what you can do
                            </Link>  </div>
                        <Link to="/quiz" class="quiz-box" id="quizPage">take the quiz</Link>
                      
                    </div>
                </nav>
</header>
        )
    }
}