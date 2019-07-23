import React, { Component } from 'react';
import './Response.css';
import './QuizForm.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'  
import DonutChart from 'react-donut-chart';

import { functionTypeAnnotation } from '@babel/types';


export default class Response extends Component {
    render() {
       
        return(


            <div className="results-page">
            <div className="results">
                <div className="total-pts-container">
                <h3 className="total-pts">Total impact points: </h3>
            </div>

               <div className="points-container">
                <div className="points"><span>{this.props.formResponse}</span></div>
            </div> 
            

            
            </div>
            <div className="categories-container">
                <FontAwesomeIcon icon={faCircle} id="red-dot"/>
                <div className="rating-scale" >1-3 indicates poor environmental impact</div>
                <FontAwesomeIcon icon={faCircle} id="yellow-dot"/>
                <div className="rating-scale" >4-7 indicates average environmental impact</div>
                <FontAwesomeIcon icon={faCircle} id="green-dot"/>
                <div className="rating-scale" >8-10 indicates above average environmental impact</div>
            </div>
            <div className="chart-container">
                <h3 className="breakdown-words">IMPACT BREAKDOWN</h3>
            <DonutChart className="donutChart"
    data={[{
        label: 'Transportation',
        value: 10
    },
    {
        label: 'Diet',
        value: 8
 
    },
    {
        label: 'SHOPPING',
        value: 4
    },
    {
        lable: 'WASTE',
        value: 5
    },
    {
        label: 'POWER', 
        value: 6
    }
    ]} />
               
</div>
</div>
        )
    }
}