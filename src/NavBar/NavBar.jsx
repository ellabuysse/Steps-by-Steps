import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import './NavBar.css';

export default class NavBar extends Component {

    render() {
        return(
            <header>
                <nav>
                    <div className="nav-title">
                        <Link to="/">Steps by Steps</Link>
                    </div>
                    <Link to="/TipsPage/TipsPage">what you can do</Link>
                    <Link to="/WhyMatters">why it matters</Link>
                </nav>
            </header>
        )
    }
}