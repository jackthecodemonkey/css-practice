import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import TenderList from '../../../components/TenderList/';
import { shallow } from 'enzyme';

test('Should render something', () => {
    const tenderList = shallow(<TenderList />);
})