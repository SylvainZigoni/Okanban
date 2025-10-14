import Joi from 'joi';
import { checkBody } from '../utils/common.util.js';

export function validateAuthField(req, res, next) {
    //
    const minLength = process.env.NODE_ENV === 'production' ? 8 : 4;

    // if (process.env.NODE_ENV === 'production') {
    //     minLength = 8;
    // } else {
    //     minLength = 4;
    // }

    const authSchema = Joi.object({
        username: Joi.string().required().min(2),
        password: Joi.string().required().min(minLength),
    });

    checkBody(authSchema, req.body, res, next);
}
