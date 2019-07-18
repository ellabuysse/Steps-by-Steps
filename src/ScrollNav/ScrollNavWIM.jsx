import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'  
import './ScrollNav.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { functionTypeAnnotation } from '@babel/types';
export default class ScrollNav extends Component {
    constructor(props){
        super(props)
        this.state ={
            firstButton: true,
            secondButton: false,
            thirdButton: false
        }
        this.handleClickFirst = this.handleClickFirst.bind(this);
        this.handleClickSecond = this.handleClickSecond.bind(this);
        this.handleClickThird = this.handleClickThird.bind(this);
    }
    handleClickFirst(){
        this.setState({
            firstButton: true,
            secondButton: false,
            thirdButton: false
        })
    
    }
    handleClickSecond(){
        this.setState({
            firstButton: false,
            secondButton: true,
            thirdButton: false
        })
    }
    handleClickThird(){
        this.setState({
            firstButton: false,
            secondButton: false,
            thirdButton: true
        })
    }
    render() {
        
        return(
            <div className = "scroll-nav" id="WIM-scroll">
                <AnchorLink href='#earthNeedsHelp' className={this.state.firstButton ? "buttonTrueWIM": "buttonFalseWIM"} onClick={this.handleClickFirst}><FontAwesomeIcon icon= {faCircle}/></AnchorLink>
                <AnchorLink href='#partSolution' className={this.state.secondButton ? "buttonTrueWIM": "buttonFalseWIM"} onClick={this.handleClickSecond}><FontAwesomeIcon icon= {faCircle} /></AnchorLink> 
                <AnchorLink href='#smallActions'className={this.state.thirdButton ? "buttonTrueWIM": "buttonFalseWIM"} onClick={this.handleClickThird}><FontAwesomeIcon icon= {faCircle} /></AnchorLink>
            </div>
        )
    }
}