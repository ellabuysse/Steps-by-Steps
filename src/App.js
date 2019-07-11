import React from 'react';
import {
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

import NavBar from './NavBar/NavBar'; 
import HomePage from './HomePage/HomePage';
import TipsPage from './TipsPage/TipsPage';
import WIMPage from './WIMPage';


class App extends React.Component {

    render() {

        return (
            <Router>
   
                <div>
                    <Route exact path="/" render={HomePage}/>
                    <Route exact path="/why-this-matters" render={WIMPage}/>
                    <Route exact path="/tips" render={TipsPage}/>

                </div>
            </Router>

        );
    }
}

export default App;
