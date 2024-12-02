import { CountryBorder } from "./country-border"
import { CountryPopulation } from "./country-population"

export type CountryResponse = {
    commonName: string
    officialName: string
    countryCode: string
    region: string
    borders: CountryBorder[],
    population: CountryPopulation[],
    flag: string
}