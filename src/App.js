import React from 'react';
import {
    Route,
    Link,
    BrowserRouter as Router
} from 'react-router-dom';

import NavBar from './NavBar/NavBar'; 
import HomePage from './HomePage';
import TipsPage from './TipsPage';
import WIMPage from './WIMPage';

class App extends React.Component {

    render() {

        return (
            <Router>
            <div>
                <NavBar/>
                
                <div>
                    <Route exact path="/" render={HomePage}/>
                    <Route exact path="/why-this-matters" render={WIMPage}/>
                    <Route exact path="/tips" render={TipsPage}/>
                </div>
            </div>
            </Router>

        );
    }
}

export default App;
