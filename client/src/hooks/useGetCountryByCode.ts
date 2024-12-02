import { useQuery } from "@tanstack/react-query";
import CountryService from "../services/country.service";

const useGetCountryByCode = (code: string) => useQuery({
    queryKey: ['country', code],
    queryFn: () => CountryService.getCountryByCode(code)
})

export { useGetCountryByCode }