import { Router } from 'express';
import { register } from '../controllers/auth.controller.js';
import { validateAuthField } from '../middlewares/register.middleware.js';

const authRouter = Router();

authRouter.post('/register', validateAuthField, register);

export { authRouter };
