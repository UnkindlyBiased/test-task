import axios from 'axios'

import { ApiError } from '../../utils/error/api.error'

export class CountryService {
    async getAllCountries() {
        return (await axios.get(`${process.env.NAGER_BASE_URL}/AvailableCountries`)).data
    }
    async getCountryInfo(countryCode: string) {
        const countryWithBorders = (await axios.get(`${process.env.NAGER_BASE_URL}/CountryInfo/${countryCode}`)).data
        if (countryWithBorders['status'] === 404) {
            throw ApiError.NotFound('Such country does not exist')
        }

        const population = await axios.post(`${process.env.COUNTRIESNOW_BASE_URL}/countries/population`, {
            country: countryWithBorders['commonName']
        }).then(res => res.data['data']['populationCounts'])
        const flag = await axios.post(`${process.env.COUNTRIESNOW_BASE_URL}/countries/flag/images`, {
            iso2: countryWithBorders['countryCode']
        }).then(res => res.data['data']['flag'])

        return {
            ...countryWithBorders,
            population,
            flag
        }
    }
}