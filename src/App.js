import React from 'react';
import {
    Route,
    Link,
    BrowserRouter as Router
} from 'react-router-dom';

import NavBar from './NavBar/NavBar'; 
import WhyMatters from './WhyMatters/WhyMatters';
<<<<<<< HEAD
import Footer from './Footer/Footer';
import HomePage from './HomePage/HomePage';
import TipsPage from './TipsPage/TipsPage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
=======
import HomePage from './HomePage';
import TipsPage from './TipsPage';
import WIMPage from './WIMPage';
>>>>>>> d89bd9efc7d9287bd456669543a845d8744bebac

class App extends React.Component {

    render() {

        return (
            <Router>
            <div>
                <NavBar/>
                <div>
                    <Route exact path="/" render={HomePage}/>
<<<<<<< HEAD
                    <Route exact path="why-it-matters" render={this.WIMPage}/>
                    <Route exact path="/tips" render={TipsPage/TipsPage}/>
=======
                    <Route exact path="why-it-matters" render={WIMPage}/>
                    <Route exact path="/tips" render={TipsPage}/>
>>>>>>> d89bd9efc7d9287bd456669543a845d8744bebac
                </div>
            </div>
            </Router>

        );
    }
}

export default App;
