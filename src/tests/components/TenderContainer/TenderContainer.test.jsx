import React from 'react';
import { TenderContainer } from '../../../components/TenderContainer/';
import { shallow } from 'enzyme';

jest.mock('../../../services/TenderService');

test('Should have 2 tenders in state', (done) => {
    const tenderContainer = shallow(<TenderContainer />);
    setTimeout(() => {
        tenderContainer.update();
        expect(tenderContainer.state('tenders').length).toEqual(2);
        done();
    })
});

test('Should not display a message', (done) => {
    const tenderContainer = shallow(<TenderContainer />);
    setTimeout(() => {
        tenderContainer.update();
        expect(tenderContainer
            .find('Message')
            .dive()
            .find('div').length)
        .toEqual(0);
        done();
    })
});