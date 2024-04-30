import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import apiRouter from './api/api.router'
import { API_PREFIX } from './constants'
import * as middlewares from './middlewares'

dotenv.config()

const app = express()

app.use(morgan('dev'))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.use(API_PREFIX, apiRouter)

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

export default app
