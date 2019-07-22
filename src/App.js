import React from 'react';
import {
    Route,
    BrowserRouter as Router
} from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import TipsPage from './TipsPage/TipsPage';
import WIMPage from './WIMPage';
import QuizPage from './QuizPage/QuizPage';

class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" render={HomePage}/>
                    <Route exact path="/why-this-matters" render={WIMPage}/>
                    <Route exact path="/tips" render={TipsPage}/>
                    <Route exact path="/quiz" render={QuizPage}/>

                </div>
            </Router>

        );
    }
}

export default App;
