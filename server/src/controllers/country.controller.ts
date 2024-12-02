import { NextFunction, Request, Response } from 'express';

import { CountryService } from '../services/country.service';

class CountryController {
    constructor(private service = new CountryService()) {}

    getCountries = async (_: Request, res: Response, next: NextFunction) => {
        try {
            const countries = await this.service.getAllCountries();

            return res.send(countries);
        } catch (e) {
            next(e);
        }
    };
    getCountryInfo = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { code: countryCode } = req.params;
            const data = await this.service.getCountryInfo(countryCode);

            return res.send(data);
        } catch(e) {
            next(e);
        }
    };
}

export default new CountryController();