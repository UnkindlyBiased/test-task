import { CountryShort } from "../../types/countries-response"

type CountryCardProps = {
    country: CountryShort
    onClick?: () => void
}

const CountryCard = ({ country, onClick }: CountryCardProps) => {
    return (
        <div className="bg-red-600 h-24 rounded-lg px-3 flex items-center cursor-pointer group" onClick={onClick}>
            <span className="text-white text-xl font-medium group-hover:underline">{country.name}</span>
        </div>
    )
}  

export { CountryCard }