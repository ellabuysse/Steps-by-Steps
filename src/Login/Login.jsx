import React, { Component } from 'react';
import './Login.css';
import QuizForm from '../QuizForm/QuizForm';
import { runInThisContext } from 'vm';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import { validate } from '@babel/types';
import PasswordMask from 'react-password-mask';
import axios from 'axios';


export default class Login extends Component {
   
    constructor(props){ 
        super(props);
        this.state = {
            submit: false,
            isHidden: false,
            signup: true,
            formData: {
                id: '',
                username: '',
                password: '',
                isUsernameEnabled: false,
                isPasswordEnabled: false
                
            }
           
        }
       
        this.onLoginClick = this.onLoginClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.renderQuiz = this.renderQuiz.bind(this);
        this.renderSignup = this.renderSignup.bind(this);
        this.renderLogin = this.renderLogin.bind(this);
        this.onSignupClick = this.onSignupClick.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.databaseURL = "https://stepsbysteps-backend.herokuapp.com";
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
        
    

    onSubmit (isEnabled) {
       console.log(isEnabled);
       console.log("button clicked");
        this.setState  ({
            login: false,
            signup: false,
            submit: true
        })
        
        
       
    }
    
    onLoginClick () {
        console.log("onloginclick");

        var user_name = this.state.username;
        var pass_word = this.state.password;
        var id;
        var userURL = "/users/user?userName="+user_name+"&password="+pass_word;

        console.log(user_name);
        console.log(pass_word);

        axios.get(this.databaseURL+userURL)
        .then(function(response) {
            var data = response.data;
        
            console.log("success");
            console.log(data);
            console.log(data['id']);
            console.log(data['userName']);
            console.log(data['password']);

            id = data['id'];
        })
        .catch(function(error) {
            console.log("******\nERROR\n******");
            console.log(error);
        });

        this.setState({
            login: true,
            signup: false
        })
    }
    onSignupClick() {
        var user_name = this.state.username;
        var pass_word = this.state.password;
        var id;

        axios.post(this.databaseURL+"/users", {
            userName: user_name,
            password: pass_word
        })
        .then(function(response) {
            var data = response.data;
        
            id = data['id'];
        })
        .catch(function(error) {
            console.log("******\nERROR\n******");
            console.log(error);
        });

        this.setState({
            login: false,
            signup: true,
            formData: {
                id: id
            }
        })
    }
    renderQuiz () {
        return(
            
            <QuizForm/>
        )
        
    }
 
    renderSignup () {
       
    
        return(
            <div>
           
            <p className="quiz-item" id="quiz-description">Take our quiz to determine the impact you have on the environment. Evaluate yourself on the previous week and complete weekly to see how your steps for a reduced impact are making a difference. </p>
                
            <div className="login">
                
                <input 
                    type="text" 
                    placeholder="Username" 
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
                            placeholder="Password"

                            required
                            />
                   </div>
                   
                <div className="submit-login">
                        
                            
                                <button 
                                    className="submit-text" 
                                    onClick={this.onSubmit}  
                                    id="login-btn" disabled={!(this.state.isUsernameEnabled && this.state.isPasswordEnabled)}
                                >
                                    SIGN UP
                                </button>
                           
                        </div> 
                       
                        <div className = "have-account">
                        <p id="need-login">Already have an account?</p>
                        <div >
                            
                                <a onClick={this.onLoginClick}  id="btn-to-login">LOGIN</a>
       
                        </div></div></div>
                        </div>
                       
        )
        
    }
    renderLogin() {
        let { username, password } = this.state.formData;
        let isEnabled = username === '' && password === '';
        
        return(
            <div>
             
            <p className="quiz-item" id="quiz-description">Take our quiz to determine the impact you have on the environment. Evaluate yourself on the previous week and complete weekly to see how your steps for a reduced impact are making a difference. </p>
                
            <div className="login">
                <input type="text" placeholder="Username" className="login-box"></input>
                <div id="password-mask">
                <PasswordMask
                            
                            inputClassName= "login-box"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            placeholder="Password"
                           
                            required
                            />
                            </div>
                            <div className="submit-login">   
                        <button 
                            className="submit-text" 
                            onClick={this.onSubmit}  
                            id="login-btn" disabled={!isEnabled}
                        >
                            LOGIN
                        </button>
                   
                </div> 

                            
                        <div className = "have-account">
                        <p id="need-login">Need to create an account?</p>
                        <div >
                            
                                <a onClick={this.onSignupClick}  id="btn-to-login">SIGN UP</a>
       
                        </div></div>
                        </div>
   
                        
         
            </div>
        )
    }

    render() {
        return(  
            
            <div>
                 
      
                {this.state.signup ? this.renderSignup() : null}
                {this.state.login ? this.renderLogin() : null}
                {this.state.submit ? this.renderQuiz() : null}
        </div>)

    }
}
