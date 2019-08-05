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
                        <Link to="/why-this-matters" className="home-nav-link">why it matters</Link>
                        <Link to="/tips" className="home-nav-link">what you can do</Link>
                        <Link to="/quiz" className="home-nav-link">take the quiz</Link>
                    </div>
                </nav>
            </header>
        )
    }
}