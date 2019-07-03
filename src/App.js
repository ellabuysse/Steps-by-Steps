import React from 'react';
import FeatureBlock from './FeatureBlock/FeatureBlock';
import NavBar from './NavBar/NavBar';

class MyComponentClass extends React.Component {

    render() {

        return (
            <div>
                <NavBar/>
                <FeatureBlock
                    title="Transportation"
                    small-graphic-1="fas fa-bus"
                    tip-1="Ride public transport or carpool to school or work"
                    small-graphic-2="fa fa-biking"
                    tip-2="Ride your bike to somewhere you would usually drive"
                    small-graphic-3="fas fa-walking"
                    tip-3="Walk somewhere instead of driving"
                    paragraph="text"
                />
            </div>
        );
    }
}

export default MyComponentClass;
