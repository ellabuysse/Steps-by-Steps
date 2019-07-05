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
                    <div class="nav-title">
                        <Link to="/">Steps by Steps</Link>
                    </div>
                    <Link to="/tips">what you can do</Link>
                    <Link to="/WhyMatters">why it matters</Link>
                </nav>
            </header>
        )
    }
}