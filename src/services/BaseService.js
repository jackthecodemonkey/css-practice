import { ServiceError } from '../models';

class BaseService {
    static ValidateResponse(response, code, message) {
        if (!response.ok) {
            throw new ServiceError(code, message);
        }
        return response;
    }
}

export default BaseService;
