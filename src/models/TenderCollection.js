import Tender from './Tender';

class TenderCollection {
    constructor(tenders = []) {
        this.tenders = Array.isArray(tenders)
            ? tenders.map(tender => new Tender(tender))
            : []
    }
}

export default TenderCollection;

