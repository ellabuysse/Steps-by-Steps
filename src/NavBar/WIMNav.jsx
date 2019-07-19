import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import './NavBar.css';

export default class WIMNav extends Component {
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
        return(
            <header>
                <nav className="pages-nav">
                    <div className="nav-title">
                        <Link to="/">Steps by Steps</Link>
                    </div>
                    <div className="nav-menu">
                        <Link to="/why-this-matters"  >
                            why it matters 
                            <div className="wim-title-underline"></div>
                            </Link>
                        <Link to="/tips">
                            what you can do
        
                            </Link>
                        <Link to="/quiz" class="quiz-box">take the quiz</Link>
                    </div>
                </nav>
            </header>
        )
    }
}