import React from 'react';
import { TenderCollection } from '../../models';
import TenderService from '../../services/TenderService';
import { Message } from '../common';
import TenderList from './TenderList';

class TenderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.hideMessage = this.hideMessage.bind(this);
        this.state = {
            tenders: null,
            showMessage: false,
            message: {}
        }
    }

    async componentDidMount() {
        try {
            const result = await TenderService.GetTenders();
            const { tenders } = new TenderCollection(result.tenders);
            this.setState({ tenders })
        } catch (error) {
            this.setState({
                message: error,
                showMessage: true,
            })
        }
    }

    hideMessage() {
        this.setState({ showMessage: false })
    }

    render() {
        return (
            <div className="container">
                <Message
                    showMessage={this.state.showMessage}
                    onClick={this.hideMessage}
                    message={this.state.message}
                />
                <div className="bg-lightGrey padding-15 mb-10" style={{ fontSize: "14px" }}>
                    Tender List
                </div>
                <div className="bg-lightGrey padding-20">
                    <TenderList tenders={this.state.tenders} />
                </div>
            </div >
        )
    }
}

export default TenderContainer;
