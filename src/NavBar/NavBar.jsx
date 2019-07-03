import React, { Component } from 'react';

export default class NavBar extends Component {

    render() {
        return(
            <React.Fragment>
            <header>
                <nav>
                    <a href="https://www.youtube.com/watch?v=2hpsJDjoses" className="nav-title"><strong>Steps by Steps</strong></a>
                    <a href="https://www.youtube.com/watch?v=2hpsJDjoses" className="quiz-box">take the quiz</a>
                    <a href="https://www.youtube.com/watch?v=2hpsJDjoses">what you can do</a>
                    <a href="https://www.youtube.com/watch?v=2hpsJDjoses">why it matters</a>
                </nav>
            </header>
            </React.Fragment>
        )
    }
}