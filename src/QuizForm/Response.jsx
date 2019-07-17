import React, { Component } from 'react';

export default class Response extends Component {
    render() {
        return(
<<<<<<< HEAD
            <div>Your total is: {this.state.formData.totalPoints}.</div>
=======
            <div>total points: {this.props.formResponse}</div>
>>>>>>> ca613bd1c276f1855d0acf936c56d73e8259e98f
        )
    }
}