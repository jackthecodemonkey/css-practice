import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import TenderContainer from '../../../components/TenderContainer/';
import { shallow } from 'enzyme';

test('Should render something', () => {
    const TenderContainer = shallow(<TenderContainer />);
})