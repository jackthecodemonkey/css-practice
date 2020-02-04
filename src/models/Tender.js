class Tender {
    constructor(tender = {}) {
        this.id = tender.id;
        this.title = tender.title;
        this.description = tender.description || '';
        this.minimum_volume = tender.minimum_volume;
        this.maximum_volume = tender.maximum_volume;
        this.close_date = tender.close_date;
    }
}

export default Tender;
