import React, { Component } from 'react';
import {
    Route,
    BrowserRouter,
    Link
} from 'react-router-dom';
import './NavBar.css';
import HomePage from '../HomePage';
import TipsPage from '../TipsPage';
import WIMPage from '../WIMPage';

export default class NavBar extends Component {

    render() {
        return(
            <header>
                <nav>
                    <div className="nav-title">
                        <Link to="/">Steps by Steps</Link>
                    </div>
<<<<<<< HEAD
                    <Link to="/TipsPage/TipsPage">what you can do</Link>
                    <Link to="/WhyMatters">why it matters</Link>
=======
                    <Link to="/tips">what you can do</Link>
                    <Link to="/why-this-matters">why this matters</Link>
>>>>>>> 5d923cad3704d3686bcc1420884761a9cdd92d26
                </nav>
            </header>
        )
    }
}