import {Router} from "express";
import { getAll, getById, create, update, deleteById, getCardsByTagId } from '../controllers/tag.controller.js';
import { validateTagCreation, validateTagUpdate } from '../middlewares/tag.middleware.js';
import { validateId } from '../middlewares/common.middleware.js';

const tagRouter = Router();

tagRouter.get('/', getAll);
tagRouter.get('/:id', validateId, getById);
tagRouter.post('/', validateTagCreation, create);
tagRouter.patch('/:id', validateId, validateTagUpdate, update);
tagRouter.delete('/:id', validateId, deleteById);
tagRouter.get('/:id/cards', validateId, getCardsByTagId);

export { tagRouter };
