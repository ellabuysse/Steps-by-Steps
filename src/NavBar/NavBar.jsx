import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

export default class NavBar extends Component {

    render() {
        return(
            <header>
                <nav>
                    <Link to="/">Steps by Steps</Link>

                    <Link to="/tips">what you can do</Link>
                </nav>
            </header>
        )
    }
}