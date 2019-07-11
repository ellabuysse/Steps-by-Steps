import React from 'react';
import FeatureBox from '../FeatureBox/FeatureBox';
import transportTips from '../Data/transportTips';
import foodTips from '../Data/foodTips';
import shoppingTips from '../Data/shoppingTips';
import utilitiesTips from '../Data/utilitiesTips';
import TipsPageCSS from './TipsPageCSS.css';
import BGImage from '../BGImage/BGImage';

const TipsPage = (props) => {
    return (
        <div> 
            <h1 className="page-title">What You Can Do</h1>
            <div className="bg-image">
                {
                    <BGImage 
                        img="https://images.unsplash.com/photo-1500748851664-017ef7f22878?ixlib=rb-1.2.1&auto=format&fit=crop&w=2562&q=80"
                        title="Transportation"
                        position="bottom"
                        />
                }
            </div>
            <div className="tips-container">
                {
                    transportTips.map(value => (
                        <FeatureBox
                            smallGraphic={value.icon}
                            tipText={value.tipText}
                            key={value.tipText}
                            color={value.color}
                        />
                    ))
                } 
            </div>
            <p className="paragraph">Message here about why you should drive. Message here about why you should drive. Message here about why you should
    drive. Message here about why you should drive. Message here about why you should drive. Message here about why you
    should drive. Message here about why you should drive. Message here about why you should drive. Message here about
    why you should drive. Message here about why you should drive. Message here about why you should drive. Message here
    about why you should drive.</p>
           

            <div className="bg-image">
                {
                    <BGImage 
                        img="https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
                        title="Food"
                        />
                }
            </div>
            <div className="tips-container">
                {
                    foodTips.map(value => (
                        <FeatureBox
                            smallGraphic={value.icon}
                            tipText={value.tipText}
                            key={value.tipText}
                            color={value.color}
                        />
                    ))
                } 
                </div>
            <p className="paragraph">Food waste has become a global problem. In fact, over the last 60 years, our annual global food waste has increased
    by half. With the 2.9 trillion tons of food we waste each year, we could feed all 800 million undernourished people
    in the world twice. Besides wasting valuable land, fuel, and water resources, food waste contributes to global
    warming through the fossil fuel-heavy process of growing, harvesting, and shipping food. Currently, the average
    American family wastes up to two thousand two hundred dollars’ worth of food per year. Let’s do our best to reduce
    that number- the next time you go shopping, plan ahead, and only buy what you need. Share plates at restaurants. Eat
    leftovers as much as possible. One person making a commitment to produce zero food waste keeps 300 pounds of food
    from being thrown out over the course of a year. So, imagine what would happen if everyone made these changes.</p>
            
            <div className="bg-image">
                {
                    <BGImage 
                        img="https://images.unsplash.com/photo-1557687790-902ede7ab58c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1243&q=80"
                        title="Conscious Buying"
                        />
                }
            </div>
            <div className="tips-container">
                {
                    shoppingTips.map(value => (
                        <FeatureBox
                            smallGraphic={value.icon}
                            tipText={value.tipText}
                            key={value.tipText}
                            color={value.color}
                        />
                    ))
                } 
                </div>
            <p className="paragraph">As consumers, we have a responsibility to make conscious choices about our purchases. When buying something, we often
    forget to see the resources and energy that went into manufacturing and shipping that product. For instance, because
    cotton plants require so much water, a single cotton T-shirt can require up to 713 gallons of water- enough to keep
    one person well-hydrated for over five years. Consider thrifting some of your clothes to save both money and resources. </p>
        
            <div className="bg-image">
                {
                    <BGImage 
                        img="https://images.unsplash.com/photo-1544215830-1c67ed769a61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                        title="Utilities"
                        />
                }
            </div>
            <div className="tips-container">
                {
                    utilitiesTips.map(value => (
                        <FeatureBox
                            smallGraphic={value.icon}
                            tipText={value.tipText}
                            key={value.tipText}
                            color={value.color}
                        />
                    ))
                } 
                </div>
            <p className="paragraph">Message here about turning off utilities etc. Message here about turning off utilities etc. Message here about
    turning off utilities etc. Message here about turning off utilities etc. Message here about turning off utilities
    etc. Message here about turning off utilities etc. Message here about turning off utilities etc. Message here about
    turning off utilities etc. Message here about turning off utilities etc. Message here about turning off utilities
    etc. Message here about turning off utilities etc.</p>
            
       </div>
    
    );
};

export default TipsPage;