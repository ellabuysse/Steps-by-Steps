import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {
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
                        <div className="nav-links" id="whyThisMattersPage">
                            <Link to="/why-this-matters">why it matters </Link>
                        </div>
                        <div className="nav-links" id="tips-page">
                            <Link to="/tips">what you can do</Link>  
                        </div>
                        <div className="nav-links-quiz">
                            <Link to="/quiz" className="quiz-box take-quiz" id="quizPage">take the quiz</Link>
                        </div>
                    </div>
                </nav>
</header>
        )
    }
}