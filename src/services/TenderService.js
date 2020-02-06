import { Endpoint } from './endpoint';
import { ServiceError } from '../models';
import BaseService from './BaseService';
import event from '../services/events/Event';

const BadResponseGettingTenders = "Error getting tender list";
class TenderService extends BaseService {
    static GetTenders() {
        return fetch(`${Endpoint}/tenders`)
            .then(response => {
                this.ValidateResponse(response, 0, BadResponseGettingTenders);
                return response.json()
            }).catch(e => {
                throw new ServiceError(0, BadResponseGettingTenders);
            }).finally(() => {
                event.emit("fetchEnd");
            })
    }
}

export default TenderService;
