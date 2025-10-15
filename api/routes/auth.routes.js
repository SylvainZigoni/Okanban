import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';
import { validateAuthField } from '../middlewares/register.middleware.js';

const authRouter = Router();

// ? les URLs sont préfixées avec /auth
authRouter.post('/register', validateAuthField, register);
authRouter.post('/login', validateAuthField, login);

export { authRouter };
