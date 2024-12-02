import express from 'express'
import { config } from 'dotenv'

import { MainRouter } from './src/routers/main.router'
import { errorMiddleware } from './utils/middlewares/error.middleware'

config()

const app = express()

app.use(express.json())

app.use(MainRouter)

app.use(errorMiddleware)

const start = async () => {
    const PORT = Number(process.env.APP_PORT) || 5481
    try {
        app.listen(PORT, () => console.log('Backend is started'))
    } catch(e) {
        console.log(e)
    }
}

start()