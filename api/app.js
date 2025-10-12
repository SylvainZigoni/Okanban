import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import { errorHandler, notFound } from './middlewares/common.middleware.js';
import { cardRouter } from './routes/card.routes.js';
import { listRouter } from './routes/list.routes.js';
import { tagRouter } from './routes/tag.routes.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors('*'));

app.use(express.json());

app.use('/lists', listRouter);
app.use('/cards', cardRouter);
app.use('/tags', tagRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.info(`🚀 Server running at http://localhost:${PORT}`);
});
