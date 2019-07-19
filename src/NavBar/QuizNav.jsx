import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import './NavBar.css';

export default class QuizNav extends Component {
    render() {
        return(
            <header>
                <nav className="pages-nav">
                    <div className="nav-title">
                        <Link to="/">Steps by Steps</Link>
                    </div>
                    <div className="nav-menu">
                        <Link to="/why-this-matters">
                            why it matters 
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