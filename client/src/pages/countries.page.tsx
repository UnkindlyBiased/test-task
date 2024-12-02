import { useGetCountries } from "../hooks/useGetCountries"
import { CountryCardGrid } from "../components/featured/country-card-grid"

const CountriesPage = () => {
    const { data, isLoading } = useGetCountries()

    if (isLoading || !data) {
        return <>Loading...</>
    }

    return (
        <CountryCardGrid countries={data} />
    )
}

export { CountriesPage }