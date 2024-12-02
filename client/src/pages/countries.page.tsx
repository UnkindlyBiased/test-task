import { useGetCountries } from "../hooks/useGetCountries"

const CountriesPage = () => {
    const { data } = useGetCountries()

    if (data) {
        console.log(data)
    }

    return (
        <div>

        </div>
    )
}

export { CountriesPage }