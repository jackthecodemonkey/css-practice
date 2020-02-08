import React from 'react';
import Table from '../Table';

const TenderList = props => {
    const rows = props.tenders && props.tenders.map(tender => {
        return <div key={tender.id}>
            <div>{tender.title}</div>
            <div>{tender.description}</div>
            <div>{tender.minimum_volume}</div>
            <div>{tender.maximum_volume}</div>
            <div>{tender.close_date}</div>
        </div>
    })
    return (
        <div>
            <div>
                    <div>Title</div>
                    <div>Description</div>
                    <div>Min Volume</div>
                    <div>Max Volume</div>
                    <div>Close Date</div>
            </div>
            <div>
                {rows}
            </div>
        </div>
    );
}

export default TenderList;
