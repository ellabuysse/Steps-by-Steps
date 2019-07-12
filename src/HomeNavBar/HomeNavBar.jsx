import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import './HomeNavBar.css';

export default class HomeNavBar extends Component {

    render() {
        return(
            <header>
                <nav className="home-nav">
                    <div className="nav-title home-title">
                        <Link to="/">Steps by Steps</Link>
                    </div>
                    <div className="nav-menu">
                        <Link to="/why-this-matters">why it matters</Link>
                        <Link to="/tips">what you can do</Link>
                        <Link to="/quiz">take the quiz</Link>
                    </div>
                </nav>
            </header>
        )
    }
}