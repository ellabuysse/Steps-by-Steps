import React from 'react';
import TextWithGraphic from './TextWithGraphic/TextWithGraphic';
import FeatureBox from './FeatureBox/FeatureBox';
import StatsBlock from './StatsBlock/StatsBlock';
import Footer from './Footer/Footer';
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
                    <TextWithGraphic
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
                    <TextWithGraphic
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
                    <TextWithGraphic
                        graphic={value.icon}
                        text={value.text}
                            key={value.text}
            />
            ))
            }
            </div>
            <Footer/>
        </div>
    
    );
};

export default WIMPage