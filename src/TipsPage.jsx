import React from 'react';
import NavBar from './NavBar/NavBar';
import FeatureBox from './FeatureBox/FeatureBox';
import transportTips from './Data/transportTips';
import foodTips from './Data/foodTips';
import shoppingTips from './Data/shoppingTips';
import utilitiesTips from './Data/utilitiesTips';

const TipsPage = (props) => {
    return (
        <div>
            <div className="tips-container">
                {
                    transportTips.map(value => (
                        <FeatureBox
                            smallGraphic={value.icon}
                            tipText={value.tipText}
                            key={value.tipText}
                        />
                    ))
                } 
                </div>
            <div className="paragraph">
                <p>Message</p>
            </div>

            <div className="tips-container">
                {
                    foodTips.map(value => (
                        <FeatureBox
                            smallGraphic={value.icon}
                            tipText={value.tipText}
                            key={value.tipText}
                        />
                    ))
                } 
                </div>
            <div className="paragraph">
                <p>Message</p>
            </div>

            <div className="tips-container">
                {
                    shoppingTips.map(value => (
                        <FeatureBox
                            smallGraphic={value.icon}
                            tipText={value.tipText}
                            key={value.tipText}
                        />
                    ))
                } 
                </div>
            <div className="paragraph">
                <p>Message</p>
            </div>

            <div className="tips-container">
                {
                    utilitiesTips.map(value => (
                        <FeatureBox
                            smallGraphic={value.icon}
                            tipText={value.tipText}
                            key={value.tipText}
                        />
                    ))
                } 
                </div>
            <div className="paragraph">
                <p>Message</p>
            </div>
        </div>
    
    );
};

export default TipsPage