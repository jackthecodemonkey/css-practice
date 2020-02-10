import { Event, EventTypes } from '../services/events';
import BaseService from './BaseService';
import { ServiceError } from '../models';

/* Requires further refactoring:  If event for global spinner is fired on every fetch,
*  the listener ( SpinnerContainer ) will get notified multiple times at a time
*  one solution can be a debounce
*/
const Fetch = (endpoint, message) => {
    return new Promise((resolve, reject) => {
        Event.emit(EventTypes.FETCH_START);
        return fetch(endpoint)
            .then(BaseService.ValidateResponse)
            .then(response => response.json())
            .then(result => resolve(result))
            .catch(() => {
                reject(new ServiceError(0, message));
            }).finally(() => {
                Event.emit(EventTypes.FETCH_END);
            })
    })
}

export default Fetch;
