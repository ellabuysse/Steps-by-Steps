import React, { Component } from 'react';
import './Login.css';
import QuizForm from '../QuizForm/QuizForm';
import PasswordMask from 'react-password-mask';
import axios from 'axios';
import { useValidateAll, onError, onSuccess } from 'react-indicative-hooks';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            submit: false,
            isHidden: false,
            signup: true,
            id: '',
            username: '',
            password: '',
            isUsernameEnabled: false,
            isPasswordEnabled: false
        };

        this.onLoginClick = this.onLoginClick.bind(this);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
        this.onSignupClick = this.onSignupClick.bind(this);
        this.onSignupSubmit = this.onSignupSubmit.bind(this);
        this.renderQuiz = this.renderQuiz.bind(this);
        this.renderSignup = this.renderSignup.bind(this);
        this.renderLogin = this.renderLogin.bind(this);
        this.onSignupClick = this.onSignupClick.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);


        this.databaseURL = "https://stepsbysteps-backend.herokuapp.com";
    }
    
    validate(){
        const errors = [];
        if(this.state.username === '' || this.state.password === ''){
            errors.push("Name can't be empty");}
            return errors;
    }
      
    onChangeUsername (event){

        let isText = event.target.value.length !== ''
        this.setState({
            username: event.target.value,
            isUsernameEnabled: isText
        })
    }

        onChangePassword (event){

            let isText = event.target.value.length !== ''
            this.setState({
                password: event.target.value,
                isPasswordEnabled: isText
            })
        }
        


    onLoginSubmit () {
       
        
        
        

        
        var user_name = this.state.username;
        var pass_word = this.state.password;
        var userURL = "/users/user?userName="+user_name+"&password="+pass_word;

        axios.get(this.databaseURL+userURL)
        .then((response) => {
            this.setState({
                login: false,
                signup: false,
                submit: true,
                id: response.data['id']
            });
        })
        .catch(function(error) {
            console.log("******\nERROR\n******");
            console.log(error);
            alert("Username or password doesn't match an account. Please try again.")
        });
    }

    onLoginClick () {
        this.setState({
            login: true,
            signup: false
        })
    }

    onSignupSubmit () {
        var user_name = this.state.username;
        var pass_word = this.state.password;

        axios.post(this.databaseURL+"/users", {
            userName: user_name,
            password: pass_word
        })
        .then((response) => {
            this.setState({
                login: false,
                signup: false,
                submit: true,
                id: response.data['id']
            })
        })
        .catch(function(error) {
            console.log("******\nERROR\n******");
            console.log(error);
            alert("Username taken. Please try again.")
        });
    }

    onSignupClick() {
        console.log("change to signup view");

        this.setState({
            login: false,
            signup: true,
        })
    }



    renderQuiz () {
        return(
            
            <QuizForm
                username={this.state.username}
                password={this.state.password}
                userID={this.state.id}
                />

        )

    }

 
    renderSignup () {
        return(
            <div>
           
            <p className="quiz-item" id="quiz-description">Take our quiz to determine the impact you have on the environment. Evaluate yourself on the previous week and complete weekly to see how your steps for a reduced impact are making a difference. </p>
                
            <div className="login">
                
                <input 
                    type="text" 
                    placeholder="Username (required)" 
                    className="login-box" 
                    name="username" 
                    value={this.state.username}
                    onChange={this.onChangeUsername} 
                    required></input>
        <div id="password-mask">
               <PasswordMask
                            
                            inputClassName= "login-box"
                            
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            placeholder="Password (required)"

                            required
                            />
                   </div>
                   
                <div className="submit-login">
                        
                            
                                <button 
                                    className="submit-text" 
                                    onClick={this.onSignupSubmit}
                                    id="login-btn" disabled={!(this.state.isUsernameEnabled && this.state.isPasswordEnabled)}
                                >
                                    SIGN UP
                                </button>
                           
                        </div> 
                       
                        <div className = "have-account">

                        <p id="need-login">Already have an account?</p>
                        <div >
                            <a onClick={this.onLoginClick} id="btn-to-login">LOGIN</a>
                        </div></div></div>
            </div>
        )
    }

    renderLogin() {
        
        return(
           
            <div>

             
            <p className="quiz-item" id="quiz-description">Take our quiz to determine the impact you have on the environment. Evaluate yourself on the previous week and complete weekly to see how your steps for a reduced impact are making a difference. </p>
                
            <div className="login">
                <input
                    type="text"
                    placeholder="Username (required)"
                    className="login-box"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    required></input>
                <div id="password-mask">
                <PasswordMask
                            
                            inputClassName= "login-box"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            placeholder="Password (required)"
                           
                            required
                /> 
                            </div>
                           
                            <div className="submit-login">   
                        <button 
                            className="submit-text" 

                            onClick={this.onLoginSubmit}

                            id="login-btn" disabled={!(this.state.isUsernameEnabled && this.state.isPasswordEnabled)}
                        >
                            LOGIN
                        </button>
                   
                </div> 

                            
                        <div className = "have-account">

                        <p id="need-login">Need to create an account?</p>
                        <div >
                            <a onClick={this.onSignupClick} id="btn-to-login">SIGN UP</a>
                        </div></div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.state.signup ? this.renderSignup() : null}
                {this.state.login ? this.renderLogin() : null}
                {this.state.submit ? this.renderQuiz() : null}
            </div>)
    }
}
