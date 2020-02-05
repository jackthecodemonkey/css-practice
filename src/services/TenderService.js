import { Endpoint } from './endpoint';
import BaseService from './BaseService';

class TenderService extends BaseService {
    static GetTenders() {
        return fetch(`${Endpoint}/tenders`)
            .then(response => {
                this.ValidateResponse(response, 0, "Error getting tender list");
                return response.json()
            });
    }
}

export default TenderService;
