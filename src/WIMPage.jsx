import React from 'react';
import TextBlock from './TextBlock/TextBlock';
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
                    <TextBlock
                        img={value.img}
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
                    <TextBlock
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
                    <TextBlock
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