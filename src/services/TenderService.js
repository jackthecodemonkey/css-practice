import { Endpoint } from './endpoint';
import BaseService from './BaseService';
import Fetch from './Fetch';

const NetworkError = "Network: Error getting tender list";

class TenderService extends BaseService {
    static GetTenders () {
        return Fetch(`${Endpoint}/tenders`, NetworkError)
    }
}

export default TenderService;
