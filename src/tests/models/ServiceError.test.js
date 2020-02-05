import { ServiceError } from '../../models';

test('Should ServiceError have code and message', () => {
    const customError = "I am error";
    const code = 10;
    const error = new ServiceError(code, customError);
    expect(error.code).toEqual(code);
    expect(error.message).toEqual(customError);
})