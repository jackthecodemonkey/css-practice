import React from 'react';
import { Spinner } from '.';
import { Event, EventTypes } from '../../../services/events';
import { StopWatch } from '../../../models';

class SpinnerContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        }
        this.watch = new StopWatch();
    }

    componentDidMount() {
        this.RegisterEvent();
    }

    RegisterEvent() {
        Event
            .on(EventTypes.FETCH_START, () => {
                this.setState({ show: true })
                this.watch.StartCount();
            })
            .on(EventTypes.FETCH_END, () => {
                this.HandleSpinnerDisplay();
            })
    }

    HandleSpinnerDisplay() {
        const minDisplay = this.props.minDisplay || 0;
        if (minDisplay > this.watch.Elapsed) {
            setTimeout(() => {
                this.setState({ show: false })
            }, minDisplay - this.watch.Elapsed)
        } else {
            this.setState({ show: false })
        }
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.show &&
                    <Spinner />
                }
            </React.Fragment>
        );
    }
}

export default SpinnerContainer;
