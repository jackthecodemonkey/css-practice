import React from 'react';
import { Message } from '../../../components/common';
import { shallow } from 'enzyme';

test('Should render a message', () => {
    const message = shallow(<Message text="Hello" />);
    expect(message.find('div').length).toEqual(1);
    expect(message.find('div').at(0).text()).toEqual("Hello");
})