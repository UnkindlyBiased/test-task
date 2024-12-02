import { useQuery } from "@tanstack/react-query";
import CountryService from "../services/country.service";

const useGetCountries = () => useQuery({
    queryKey: ['countries'],
    queryFn: CountryService.getCountries
})

export { useGetCountries }