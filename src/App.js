import React from 'react';
import FeatureBlock from './FeatureBlock/FeatureBlock';

class MyComponentClass extends React.Component {

    render() {

        return (
            <div>
                <FeatureBlock
                    title="text"
                />
                <FeatureBlock
                    title="test"
                />
            </div>
        );
    }
}

export default MyComponentClass;
