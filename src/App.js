import React from 'react';
import {
    Route,
    Link,
    BrowserRouter as Router
} from 'react-router-dom';
import FeatureBlock from './FeatureBlock/FeatureBlock';
import NavBar from './NavBar/NavBar';

class App extends React.Component {

    HomePage = (props) => {
        return (
            <div>
                <NavBar/>
                <h1>Steps by Steps</h1>
                <h2>Saving the earth one step at a time</h2>
            </div>
        );
    };

    TipsPage = (props) => {
        return (
            <div>
            <FeatureBlock
                title="Transportation"
                smallGraphicOne="fas fa-bus"
                tipOne="Ride public transport or carpool to school or work"
                smallGraphicTwo="fa fa-biking"
                tipTwo="Ride your bike to somewhere you would usually drive"
                smallGraphicThree="fas fa-walking"
                tipThree="Walk somewhere instead of driving"
                paragraph="Message here about why you should drive"
            />
            <FeatureBlock
                title="Food"
                smallGraphicOne="fas fa-drumstick-bite"
                tipOne="Store leftovers from a meal"
                smallGraphicTwo="fas fa-clipboard-list"
                tipTwo="Make a grocery list before shopping"
                smallGraphicThree="fas fa-trash"
                tipThree="Compost food scraps"
                paragraph="Food waste has become a global problem. In fact, over the last 60 years, our annual global food waste has increased
                by half. With the 2.9 trillion tons of food we waste each year, we could feed all 800 million undernourished people
                in the world twice. Besides wasting valuable land, fuel, and water resources, food waste contributes to global
                warming through the fossil fuel-heavy process of growing, harvesting, and shipping food. Currently, the average
                American family wastes up to two thousand two hundred dollars’ worth of food per year. Let’s do our best to reduce
                that number- the next time you go shopping, plan ahead, and only buy what you need. Share plates at restaurants. Eat
                leftovers as much as possible. One person making a commitment to produce zero food waste keeps 300 pounds of food
                from being thrown out over the course of a year. So, imagine what would happen if everyone made these changes."
            />
            <FeatureBlock
                title="Conscious Buying"
                smallGraphicOne="far fa-times-circle"
                tipOne="Choose not to buy something you don't need"
                smallGraphicTwo="fas fa-search"
                tipTwo="Research ethical companies"
                smallGraphicThree="fas fa-tshirt"
                tipThree="Thrift shop your clothes"
                paragraph="As consumers, we have a responsibility to make conscious choices about our purchases. When buying something, we often
                forget to see the resources and energy that went into manufacturing and shipping that product. For instance, because
                cotton plants require so much water, a single cotton T-shirt can require up to 713 gallons of water- enough to keep
                one person well-hydrated for over five years. Consider thrifting some of your clothes to save both money and resources. "
            />
            </div>
        );
    };

    render() {

        return (
            <Router>
            <div>
                <NavBar/>
                <div>
                    <Route exact path="/" render={this.HomePage}/>
                    <Route exact path="/tips" render={this.TipsPage}/>
                </div>
            </div>
            </Router>

        );
    }
}

export default App;
