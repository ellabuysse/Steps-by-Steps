import React from 'react';
import NavBar from './NavBar/NavBar';
import TextWithGraphic from './TextWithGraphic/TextWithGraphic';
import FeatureBox from './FeatureBox/FeatureBox';
import StatsBlock from './StatsBlock/StatsBlock';
import Footer from './Footer/Footer';
import stats from './Data/stats';
import introText from './Data/introText';
import weArePartText from './Data/weArePartText';
import smallActionsMakeText from './Data/smallActionsMakeText';
import './WIMPage.css';
import BGImage from './BGImage/BGImage';

const WIMPage = (props) => {
    return (
        <div>
            <NavBar/>
                <div className="bg-image top">
                    {
                        <BGImage 
                            img="https://images.pexels.com/photos/1313807/pexels-photo-1313807.jpeg?cs=srgb&dl=branch-bright-color-1313807.jpg&fm=jpg"
                            title="The Earth Needs Our Help"
                            />
                    }
                </div>

                <div className="stats-container"> 
                {
                    stats.map(value => (
                        <StatsBlock
                            statsNumber={value.number}
                            statsText={value.text}
                            key={value.text}
                            color={value.color}
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

                <div className="bg-image">
                {
                    <BGImage 
                        img="https://images.pexels.com/photos/250400/pexels-photo-250400.jpeg?cs=srgb&dl=dawn-daylight-fog-250400.jpg&fm=jpg"
                        title="We Are Part Of The Solution"                        />
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

                <div className="bg-image">
                {
                    <BGImage 
                        img="https://images.pexels.com/photos/450004/pexels-photo-450004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                        title="Small Actions Make Great Change"
                    />
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