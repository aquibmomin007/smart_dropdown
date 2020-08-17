import { useState, useEffect } from "react";
import axios from "../mocks/axios";
import { baseUrl } from "../constants";

export type SelectOption = {
    value: string
    label: string
}

export type GetCountriesResponse = {
  data: SelectOption[]
}

export type CreateCountriesResponse = {
  data: SelectOption[]
  success: boolean
}

export const useCountriesList =  (term: string) => {
  const [countries, setCountries] = useState<SelectOption[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const addCountry = (country: string) =>
    axios.post(baseUrl + "/countries", { params: { term: country } }) as Promise<CreateCountriesResponse>

  const getCountries = async (term: string) => {
    return await axios.get(baseUrl + "/countries", { params: { term: term } }) as Promise<CreateCountriesResponse>
  }

  useEffect(() => {
    const fetchCountries = async (term: string) => {
      setError(null);
      setIsLoading(true);
  
      try {
        const result = await getCountries(term)
        setCountries(result.data)
      } catch (error) {
        setError(error);
      }
  
      setIsLoading(false);
    };

    fetchCountries(term)

  }, [term]);
  
  return { countries, addCountry, getCountries, isLoading, error };
}