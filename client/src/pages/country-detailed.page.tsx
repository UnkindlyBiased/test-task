import { useParams } from "react-router"

import { useGetCountryByCode } from "../hooks/useGetCountryByCode"
import { CountryTitle } from "../components/featured/country-detailed/country-title"
import { CountryCardGrid } from "../components/featured/country-card-grid"
import { CountryPopulationChart } from "../components/featured/country-detailed/country-chart"

const CountryDetailedPage = () => {
    const { code } = useParams()
    const { data, isLoading } = useGetCountryByCode(code || '')

    if (isLoading || !data) {
        return <>Loading ...</>
    }

    return (
        <div className="flex flex-col space-y-3">
            <CountryTitle {...data} />
            <div className="flex flex-col space-y-2">
                <span className="font-bold text-2xl">Bordered countries</span>
                <CountryCardGrid countries={data.borders.map((c) => { return { countryCode: c.countryCode, name: c.commonName } })} />
            </div>
            <div className="flex flex-col space-y-2">
                <span className="font-bold text-2xl">Population Chart</span>
                <CountryPopulationChart data={data.population} />
            </div>
        </div>
    )
}

export { CountryDetailedPage }