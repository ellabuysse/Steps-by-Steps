import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";

export class Counter extends React.Component {

    static defaultProps = {
        end: 100,
        suffix: '',
    }

    constructor(props) {
        super(props);
        this.state = {
            hasCounted: false
        };
    }
    handleVisibility = (isVisible, start) => {
        const { hasCounted } = this.state;
        if (isVisible && !hasCounted) {
            start();
            this.setState({ hasCounted: true });
        }
    };
    render() {

        const { end, suffix } = this.props;

        return (
            <div>
                <CountUp start={0} end={end} suffix={suffix} delay={1}>
                    {({ countUpRef, start }) => (
                        <div>
                            <VisibilitySensor
                                onChange={isVisible => this.handleVisibility(isVisible, start)}
                            >
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        </div>
                    )}
                </CountUp>
            </div>
        );
    }
}
export default Counter;