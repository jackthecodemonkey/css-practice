import React from 'react';
import Table from '../Table';

const TenderList = props => {
    const rows = props.tenders && props.tenders.map(tender => {
        return <tr>
            <td>{tender.title}</td>
            <td>{tender.description}</td>
            <td>{tender.minimum_volume}</td>
            <td>{tender.maximum_volume}</td>
            <td>{tender.close_date}</td>
        </tr>
    })
    return (
        <Table>
            <thead>
                <tr>
                    <td>Title</td>
                    <td>Description</td>
                    <td>Min Volume</td>
                    <td>Max Volume</td>
                    <td>Close Date</td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
    );
}

export default TenderList;
