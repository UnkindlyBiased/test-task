import { Router } from 'express'

import { CountryRouter } from './country.router'

export const MainRouter = Router()

MainRouter.use('/countries', CountryRouter)