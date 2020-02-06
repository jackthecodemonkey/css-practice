import React from 'react';
import { Message } from '../../../components/common';
import { shallow } from 'enzyme';

test('Should render a message', () => {
    const message = shallow(<Message showMessage={true} message={{ message: "Hello", code: 0, }} />);
    expect(message.find('div').length).toEqual(1);
    expect(message.find('div').at(0).text()).toContain("Hello");
})

test('Should not render a message', () => {
    const message = shallow(<Message message={{ message: "Hello", code: 0, }} />);
    expect(message.find('div').length).toEqual(0);
})