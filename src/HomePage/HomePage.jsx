import React from 'react';
import HomeNavBar from '../HomeNavBar/HomeNavBar';
import './HomePage.css';

const HomePage = (props) => {
    return (
        <div>
            <HomeNavBar/>
            <div id="body">
                <div id="words">
                    <h1>STEPS BY STEPS</h1>
                    <h2>Saving the earth one step at a time</h2>
                </div>
            </div>
        </div>
    );
}

export default HomePage;