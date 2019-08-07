import React, { Component } from 'react';
import './Login.css';
import QuizForm from '../QuizForm/QuizForm';
import { runInThisContext } from 'vm';
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import { validate } from '@babel/types';
import PasswordMask from 'react-password-mask';



export default class Login extends Component {
   
    constructor(props){ 
        super(props);
        this.state = {
            submit: false,
            isHidden: false,
            signup: true,
            formData: {
                username: '',
                password: '',
                submitEnabled: false
                
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
        }
    
    onChangeUsername (event){
        this.setState({
            username: event.target.value
         
        })
        }

        onChangePassword (event){
            this.setState({
                password: event.target.value
                
            })
            }
        
    

    onSubmit () {
        this.setState  ({
            login: false,
            signup: false,
            submit: true
        })
        
        
       
    }
    
    onLoginClick () {
        this.setState({
            login: true,
            signup: false
        })
    }
    onSignupClick() {
        this.setState({
            login: false,
            signup: true
        })
    }
    renderQuiz () {
        return(
            
            <QuizForm/>
        )
        
    }
  
    renderSignup () {
    
        let isEnabled = false;
        {this.state.formData.username === '' && this.state.formData.password === '' ? isEnabled = "disabled" : isEnabled = ''}
       
        if(isEnabled === false)
            console.log("false")
            else(
                console.log("true")
            )
        return(
            <div>
             
            <p className="quiz-item" id="quiz-description">Take our quiz to determine the impact you have on the environment. Evaluate yourself on the previous week and complete weekly to see how your steps for a reduced impact are making a difference. </p>
                
            <div className="login">
                <form>
                <input type="text" placeholder="Username" className="login-box" name="username" value={this.state.username} onChange={this.onChangeUsername} required></input>
               <PasswordMask
                            className="login-box"
                            inputClassName= "login-box"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            placeholder="Password"
                           
                            required
                            />
                            
                <div className="submit-login">
                        
                            <button onClick={this.onSubmit} className="submit-button" id="submit-container" disabled= {isEnabled}>
                                <button className="submit-text"  onClick={this.onSubmit}  disabled={this.state.formData.username === '' || this.state.formData.password === ''} id="login-btn">SIGN UP</button>
                            </button>
                        </div> 
                        </form>
                        <div className = "have-account">
                        <p id="need-login">Already have an account?</p>
                        <div >
                            
                                <a onClick={this.onLoginClick}  id="btn-to-login">LOGIN</a>
       
                        </div></div></div>
                        </div>
                       
        )
        
    }
    renderLogin() {
       
        return(
            <div>
             
            <p className="quiz-item" id="quiz-description">Take our quiz to determine the impact you have on the environment. Evaluate yourself on the previous week and complete weekly to see how your steps for a reduced impact are making a difference. </p>
                
            <div className="login">
                <input type="text" placeholder="Username" className="login-box"></input>
                <PasswordMask
                            className="login-box"
                            inputClassName= "login-box"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            placeholder="Password"
                           
                            required
                            />
                            <div className="submit-login">
                            <button onClick={this.onLogin} className="submit-button" id="submit-container">
                                <a href="#results-page" onClick={this.onSubmit} className="submit-text" id="login-btn">LOGIN</a>
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