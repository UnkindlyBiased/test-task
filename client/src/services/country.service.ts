import { api } from "../api"
import { CountryShort } from "../types/countries-response"
import { CountryResponse } from "../types/country-response"

class CountryService {
    private static PREFIX = '/countries'

    static getCountries = async () => {
        return (await api.get<CountryShort[]>(this.PREFIX)).data
    }
    static getCountryByCode = async (code: string) => {
        return (await api.get<CountryResponse>(this.PREFIX + `/` + code)).data
    }
}

export default CountryService