class ServiceError extends Error {
    constructor(code, message) {
        super(message);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ServiceError)
        }
        this.code = code;
    }
}

export default ServiceError;
