import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'  
import './ScrollNav.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
export default class ScrollNav extends Component {
    constructor(props){
        super(props)
        this.state ={
            firstButton: true,
            secondButton: false,
            thirdButton: false,
            fourthButton: false
        }
        this.handleClickFirst = this.handleClickFirst.bind(this);
        this.handleClickSecond = this.handleClickSecond.bind(this);
        this.handleClickThird = this.handleClickThird.bind(this);
        this.handleClickFourth = this.handleClickFourth.bind(this);
    }
    handleClickFirst(){
        this.setState({
            firstButton: true,
            secondButton: false,
            thirdButton: false,
            fourthButton: false
        })
    
    }
    handleClickSecond(){
        this.setState({
            firstButton: false,
            secondButton: true,
            thirdButton: false,
            fourthButton: false
        })
    }
    handleClickThird(){
        this.setState({
            firstButton: false,
            secondButton: false,
            thirdButton: true,
            fourthButton: false
        })
    }
    handleClickFourth(){
        this.setState({
            firstButton: false,
            secondButton: false,
            thirdButton: false,
            fourthButton: true
        })
    }
    render() {

        return(
            <div className = "scroll-nav" id="tips-scroll">
                <AnchorLink href='#transport' className={this.state.firstButton ? "buttonTrueTips": "buttonFalseTips"} onClick={this.handleClickFirst}><FontAwesomeIcon icon= {faCircle} /></AnchorLink>
                <AnchorLink href='#food' className={this.state.secondButton ? "buttonTrueTips": "buttonFalseTips"} onClick={this.handleClickSecond}><FontAwesomeIcon icon= {faCircle} /></AnchorLink> 
                <AnchorLink href='#buying' className={this.state.thirdButton? "buttonTrueTips": "buttonFalseTips"} onClick={this.handleClickThird}><FontAwesomeIcon icon= {faCircle} /></AnchorLink>
                <AnchorLink href='#utilities' className={this.state.fourthButton ? "buttonTrueTips": "buttonFalseTips"} onClick={this.handleClickFourth}><FontAwesomeIcon icon= {faCircle} /></AnchorLink>
            </div>
        )
    }
}