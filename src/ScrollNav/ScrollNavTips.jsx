import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'  
import './ScrollNav.css';

export default class ScrollNav extends Component {
    render() {
        return(
            <div className = "scroll-nav" id="tips-scroll">
                <Link 
                    className="dot"
                    activeClass="active"
                    to='transport'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <FontAwesomeIcon icon= {faCircle} />
                </Link>
                
                <Link 
                    className="dot"
                    activeClass="active"
                    to='food'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <FontAwesomeIcon icon= {faCircle} />
                </Link> 

                <Link 
                    className="dot"
                    activeClass="active"
                    to='buying'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <FontAwesomeIcon icon= {faCircle} />
                </Link>

                <Link 
                    className="dot"
                    activeClass="active"
                    to='utilities'
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    <FontAwesomeIcon icon= {faCircle} />
                </Link> 
            </div>
        )
    }
}