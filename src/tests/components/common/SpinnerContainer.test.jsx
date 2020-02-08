import React from 'react';
import { SpinnerContainer } from '../../../components/common';
import { shallow } from 'enzyme';
import { Event, EventTypes } from '../../../services/events';

test('Should not display spinner',(done)=>{
    const spinnerContainer = shallow(<SpinnerContainer />);
    expect(spinnerContainer.find('Spinner').length).toEqual(0);
    done();
})

test('Should display a spinner',(done)=>{
    const spinnerContainer = shallow(<SpinnerContainer />);
    Event.emit(EventTypes.FETCH_START);
    expect(spinnerContainer.find('Spinner').length).toEqual(1);
    done();
})

test('Should stop displaying a spinner',(done)=>{
    const spinnerContainer = shallow(<SpinnerContainer />);
    Event.emit(EventTypes.FETCH_START);
    expect(spinnerContainer.find('Spinner').length).toEqual(1);
    Event.emit(EventTypes.FETCH_END);
    expect(spinnerContainer.find('Spinner').length).toEqual(0);
    done();
})