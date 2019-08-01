import React, { Component } from 'react';
import { Link } from "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'  
import './ScrollNav.css';

export default class ScrollNav extends Component {
    render() {
        return(
            <div className = "scroll-nav" id="WIM-scroll">
                <Link 
                    className="dot"
                    activeClass="active"
                    to='earthNeedsHelp'
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
                    to='partSolution'
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
                    to='smallActions'
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