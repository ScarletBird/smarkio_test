import express from 'express';
import cors from 'cors';

import TextsController from './TextsController';

const app = express();
app.use(cors());
app.use(express.json());

const textsController = new TextsController();

app.get('/texts', textsController.index);
app.post('/texts', textsController.create);

app.listen(3333);