import mockTenders from '../../tests/testData/mockData';

const TenderService = {
    GetTenders() {
        return new Promise((resolve) => {
            resolve({ tenders: mockTenders });
        })
    }
};

export default TenderService;
