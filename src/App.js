import React from 'react';
import {
    Route,
    Link,
    BrowserRouter as Router
} from 'react-router-dom';

import NavBar from './NavBar/NavBar'; 
import WhyMatters from './WhyMatters/WhyMatters';
import HomePage from './HomePage/HomePage';
import TipsPage from './TipsPage/TipsPage';

import Footer from './Footer/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import WIMPage from './WhyMatters/WhyMatters';


class App extends React.Component {
    WIMPage = (props) => {
        return (
            <div>
                <h2>WHY IT MATTERS</h2>
                <WhyMatters
                    header="The Earth Needs Our Help"
                    />
            </div>
        )
    }
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
