import React from 'react';
import txtWithGraphic from './txtWithGraphic/txtWithGraphic';
import FeatureBox from './FeatureBox/FeatureBox';
import StatsBlock from './StatsBlock/StatsBlock';
import stats from './Data/stats';
import introText from './Data/introText';
import weArePartText from './Data/weArePartText';
import smallActionsMakeText from './Data/smallActionsMakeText';
import './WIMPage.css';

const WIMPage = (props) => {
    return (
        <div>
            <div className="stats-container"> 
            {
                stats.map(value => (
                    <StatsBlock
                                statsNumber={value.number}
                                statsText={value.text}
                                key={value.text}
                            />
                ))
            }
            </div>
            <div className="text-container">
            {
                introText.map(value => (
                    <txtWithGraphic
                        graphic={value.icon}
                        text={value.text}
                        key={value.text}
                
            />
            ))
            }
            </div>
            <div className="text-container">
            {
                weArePartText.map(value => (
                    <txtWithGraphic
                        graphic={value.icon}
                        text={value.text}
                            key={value.text}
                
            />
            ))
            }
            </div>
            <div className="text-container">
            {
                smallActionsMakeText.map(value => (
                    <txtWithGraphic
                        graphic={value.icon}
                        text={value.text}
                            key={value.text}
                
            />
            ))
            }
            </div>
        </div>
    
    );
};

export default WIMPage