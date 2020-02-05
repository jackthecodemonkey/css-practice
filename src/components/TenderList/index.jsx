import React from 'react';
import { TenderCollection } from '../../models';
import TenderService from '../../services/TenderService';
import { Message } from '../../components/common';

class TenderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tenders: null,
            message: null,
        }
    }

    async componentDidMount() {
        try {
            const result = await TenderService.GetTenders();
            const { tenders } = new TenderCollection(result.tenders);
            this.setState({ tenders })
        } catch ({ message }) {
            this.setState({ message })
        }
    }

    render() {
        return (
            <section>
                <Message text={this.state.message} />
                <div></div>
            </section>
        )
    }
}

export default TenderList;
