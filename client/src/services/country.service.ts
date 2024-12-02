import { api } from "../api"

class CountryService {
    private static PREFIX = '/countries'

    static getCountries = async () => {
        return (await api.get(this.PREFIX)).data
    }
}

export default CountryService