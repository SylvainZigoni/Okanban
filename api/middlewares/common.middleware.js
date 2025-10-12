import { StatusCodes } from 'http-status-codes';

function notFound(_req, _res, next) {
    const error = new Error('Not found');

    error.statusCode = StatusCodes.NOT_FOUND;

    next(error);
}

function validateId(req, res, next) {
    const id = Number.parseInt(req.params.id, 10);

    if (Number.isInteger(id) && id > 0) {
        return next();
    }

    return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid ID' });
}

function errorHandler(err, _req, res, next) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        error: true,
        message: err.message,
        details: err.stack,
    });

    next();
}

export { errorHandler, validateId, notFound };
