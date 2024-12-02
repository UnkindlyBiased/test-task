import express from 'express';
import { config } from 'dotenv';
import cors from 'cors';

import { MainRouter } from './src/routers/main.router';
import { errorMiddleware } from './utils/middlewares/error.middleware';

config();

const allowedOrigins = [
    process.env.CLIENT_URL_DEV,
    process.env.CLIENT_URL_BUILD,
];

const app = express();

app.use(express.json());
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
}));

app.use(MainRouter);

app.use(errorMiddleware);

const start = async () => {
    const PORT = Number(process.env.APP_PORT) || 5481;
    try {
        app.listen(PORT, () => console.log('Backend is started'));
    } catch(e) {
        console.log(e);
    }
};

start();