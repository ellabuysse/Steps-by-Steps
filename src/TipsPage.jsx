import React from 'react';
import NavBar from './NavBar/NavBar';
import FeatureBox from './FeatureBox/FeatureBox';
import tips from './Data/tips';

const TipsPage = (props) => {
    return (
        <div>
            <div className="tips-container">
                {
                    tips.map(value => (
                        <FeatureBox
                            smallGraphic={value.icon}
                            tipText={value.tipText}
                            key={value.tipText}
                        />
                    ))
                } 
                </div>
                <div className="paragraph">
                    <p>Message here about why you should drive</p>
                </div>
        </div>
    
    );
};

export default TipsPage