import { StatusCodes } from 'http-status-codes';

export function checkBody(schema, body, res, next) {
    //
    const validation = schema.validate(body);

    if (validation.error) {
        return res.status(StatusCodes.BAD_REQUEST).send(validation.error);
    }

    next();
}
