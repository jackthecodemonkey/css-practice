import React from 'react';
import { TenderCollection } from '../../models';
import TenderService from '../../services/TenderService';
import { Message } from '../../components/common';
import event from '../../services/events/Event';

class TenderList extends React.Component {
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
            <section className="container">
                <Message
                    showMessage={this.state.showMessage}
                    onClick={this.hideMessage}
                    message={this.state.message}
                />
                <div>
                    <div style={{
                        fontSize: "14px",
                        marginBottom: "10px",
                    }}>Tender List</div>
                    <div style={{
                        background: "#f8f8f8",
                        padding: "20px",
                    }}>
                        Table comes here
                    </div>
                </div>
            </section >
        )
    }
}

export default TenderList;
