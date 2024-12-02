import { Router } from 'express';

import CountryController from '../controllers/country.controller';

export const CountryRouter = Router();

CountryRouter.get('/', CountryController.getCountries);
CountryRouter.get('/:code', CountryController.getCountryInfo);