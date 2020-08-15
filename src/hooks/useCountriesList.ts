import { useState, useEffect } from "react";
import axios from "../mocks/axios";
import { baseUrl } from "../constants";

export type CountryOption = {
    value: string
    label: string
}

export type GetCountriesResponse = {
  data: CountryOption[]
}

export type CreateCountriesResponse = {
  data: CountryOption[]
  success: boolean
}

export const useCountriesList = (term: string) => {
  const [countries, setCountries] = useState<CountryOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const addCountry = (country: string) =>
    axios.post(baseUrl + "/countries", { params: { term: country } }) as Promise<CreateCountriesResponse>
  
  useEffect(() => {
    const fetchCountries = async () => {
      setError(null);
      setIsLoading(true);
  
      try {
        const result = await axios.get(baseUrl + "/countries", { params: { term } }) as GetCountriesResponse;
        setCountries(result.data)
      } catch (error) {
        setError(error);
      }
  
      setIsLoading(false);
    };
  
    fetchCountries();
  }, [term]);
  
  return { countries, addCountry, isLoading, error };
}