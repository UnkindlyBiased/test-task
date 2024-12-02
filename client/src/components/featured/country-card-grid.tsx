import { useNavigate } from "react-router"

import { CountryShort } from "../../types/countries-response"
import { CountryCard } from "./country-card"

type CountryCardGridProps = {
    countries: CountryShort[]
}

const CountryCardGrid = ({ countries }: CountryCardGridProps) => {
    const navigate = useNavigate()

    return (
        <div className="grid gap-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {countries.map((cntr) => (
                <CountryCard
                    country={cntr} 
                    onClick={() => navigate(`/country/${cntr.countryCode}`)} 
                    key={cntr.countryCode} />
            ))}
        </div>
    )
}

export { CountryCardGrid }