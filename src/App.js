import React from 'react';
import {
    Route,
    Link,
    BrowserRouter as Router
} from 'react-router-dom';

import NavBar from './NavBar/NavBar'; 
import WhyMatters from './WhyMatters/WhyMatters';
import HomePage from './HomePage';
import TipsPage from './TipsPage';
import WIMPage from './WIMPage';

class App extends React.Component {
/*
    WIMPage = (props) => {
        return (
            <div>
                <NavBar/>
                <WhyMatters
                    bgImage="mountain-bg"
                    header="We Are Part of the Solution"
                    image="fas fa-seedling"
                    text="The average American emits 20 tons of greenhouse has emissions per year due to what they eat, how they power their
    home
    and mobile devices, and how they travel from place to place. Because human impact on the earth is so large, we have
    the
    power to make a significant difference if we take action to change our lifestyles and habits. By working to reduce
    your carbon footprint, lobbying for environment protection laws, or educating yourself about the issue, you are
    taking a step forward to make change. Change starts with us, and we must work together to better the environment."
                />
                <WhyMatters
                    bgImage="wheat-bg"
                    header="Small Actions Make Great Change"
                    image="fas fa-shoe-prints"
                    text="Lifestyle changes take hard work and dedication to achieve. That's why starting with small actions every day to help
    the earth is a great way to start thinking about your lifestyle and making changes that count. Evaluating your day
    to day actions, making goals, and changing actions one by one is manageable and measured, making the path to a
    reduced environmental impact plausible. If everyone takes the steps to reduce their impact, the combined effort
    would be exponential. Take our quiz to evaluate your environmental impact and start taking the
    right steps to help our earth. "
                />
            </div>
        );
    }
*/

    render() {

        return (
            <Router>
            <div>
                <NavBar/>
                <div>
                    <Route exact path="/" render={HomePage}/>
                    <Route exact path="why-it-matters" render={WIMPage}/>
                    <Route exact path="/tips" render={TipsPage}/>
                </div>
            </div>
            </Router>

        );
    }
}

export default App;
