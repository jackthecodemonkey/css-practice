import { ServiceError } from '../models';

const defaultAPIErrorMessage = "Network Error";

class BaseService {
    static ValidateResponse(response, code = 0, message = defaultAPIErrorMessage) {
        if (!response.ok) {
            throw new ServiceError(response.status || code, message);
        }
        return response;
    }
}

export default BaseService;
