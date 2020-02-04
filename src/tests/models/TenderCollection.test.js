import { Tender, TenderCollection } from '../../models/';
import mockTenders from './mockData';

test('Should create a collection of Tender', () => {
    const tenderCollection = new TenderCollection(mockTenders);
    expect(tenderCollection.tenders.length).toEqual(2);
})

test('Should TenderCollection contain Tender instances', () => {
    const tenderCollection = new TenderCollection(mockTenders);
    tenderCollection.tenders.forEach(tender=>{
        expect(tender instanceof Tender).toEqual(true);
    })
})