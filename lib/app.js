import express from 'express';
import cors from 'cors'
import cards from './controllers/cards.js'
import path from 'path'

const app = express();
app.use(cors())
app.use(express.static(`public`));
app.use('/', cards);

export default app;
