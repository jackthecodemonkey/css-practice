import { Endpoint } from './endpoint';
import { ServiceError } from '../models';
import BaseService from './BaseService';
import { Event, EventTypes } from '../services/events';

const BadResponseGettingTenders = "Error getting tender list";

class TenderService extends BaseService {
    static GetTenders() {
        Event.emit(EventTypes.FETCH_START);
        return fetch(`${Endpoint}/tenders`)
            .then(response => {
                this.ValidateResponse(response, 0, BadResponseGettingTenders);
                return response.json()
            })
            .then((result)=>{
                return result.tenders;
            }).catch(() => {
                throw new ServiceError(0, BadResponseGettingTenders);
            }).finally(() => {
                Event.emit(EventTypes.FETCH_END);
            })
    }
}

export default TenderService;
