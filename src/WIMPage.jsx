import React from 'react';
import TextBlock from './TextBlock/TextBlock';
import FeatureBox from './FeatureBox/FeatureBox';
import StatsBlock from './StatsBlock/StatsBlock';
import stats from './Data/stats';

const WIMPage = (props) => {
    return (
        <div>
            <div className="stats-container"> 
            {
                stats.map(value => (
                    <StatsBlock
                                number={value.number}
                                text={value.text}
                                key={value.text}
                            />
                ))
            }
            </div>
            <TextBlock
                graphic="fas fa-globe-americas"
                text="The United States population makes up less than 5% of the population on earth, but we consume more than 30% of the
                earth's
                resources. We waste many of our resources, even if we don't realize it, from using plastic
                straws that end up in the ocean and can kill animals like sea turtles, to forgetting to turn off the
                lights which impacts global carbon emissions. Due to lifestyles that are detrimental to our earth and its many
                animals, we need to act now or the earth could have serious affects. Rising sea levels could impact millions of
                people.
                Changes in water temperature cause algae to leave coral reefs, making coral reefs vulnerable to death. Heat waves
                could
                become more frequent and severe around the world. Global warming could increase the risk of more frequent, heaver
                rain, snow, and flooding. Increased global temperatures could put animals and plants at risk in the habitats which
                may not be hospitable to them anymore. These changes are already happening rapidly so we need to make the
                environment a priority. Let's act now so we can change the course of human impact on our earth."
            />
            <TextBlock
                graphic="fas fa-seedling"
                text="The average American emits 20 tons of greenhouse has emissions per year due to what they eat, how they power their
                home
                and mobile devices, and how they travel from place to place. Because human impact on the earth is so large, we have
                the
                power to make a significant difference if we take action to change our lifestyles and habits. By working to reduce
                your carbon footprint, lobbying for environment protection laws, or educating yourself about the issue, you are
                taking a step forward to make change. Change starts with us, and we must work together to better the environment."
            />
            <TextBlock
                graphic="fas fa-shoe-prints"
                text="Lifestyle changes take hard work and dedication to achieve. That's why starting with small actions every day to help
                the earth is a great way to start thinking about your lifestyle and making changes that count. Evaluating your day
                to day actions, making goals, and changing actions one by one is manageable and measured, making the path to a
                reduced environmental impact plausible. If everyone takes the steps to reduce their impact, the combined effort
                would be exponential. Take our quiz to evaluate your environmental impact and start taking the
                right steps to help our earth."
            />
        </div>
    
    );
};

export default WIMPage