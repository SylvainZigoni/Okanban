import { User } from '../models/index.js';
import * as argon2 from 'argon2';
import { StatusCodes } from 'http-status-codes';

export async function register(req, res) {
    // !  il faut valider le body
    const { username, password } = req.body;

    try {
        const hash = await argon2.hash(password);
        const user = await User.create({ username: username, password: hash });
        // const user = await User.create({ username, password: hash });

        res.status(StatusCodes.CREATED).json({ id: user.id, username: user.username });
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(StatusCodes.CONFLICT).json({ error: 'Username exists' });
        }

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
}
