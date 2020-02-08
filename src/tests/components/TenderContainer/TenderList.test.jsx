import React from 'react';
import mockData from '../../testData/mockData';
import TenderList from '../../../components/TenderContainer/TenderList';
import { shallow } from 'enzyme';

test('Should render a table with 3 rows',()=>{
    const table = shallow(<TenderList tenders={mockData} />)
    expect(table.find('tr').length).toEqual(3);
})