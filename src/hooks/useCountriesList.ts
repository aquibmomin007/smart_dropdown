import { useState, useEffect, useCallback } from "react";
import axios from "../mocks/axios";
import { baseUrl } from "../constants";
import { debounce } from "lodash";

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

  // const getCountries = async (term: string) => {
  //   console.log("get countries")
  //   return await axios.get(baseUrl + "/countries", { params: { term: term } }) as Promise<CreateCountriesResponse>
  // }

  const fetchCountries = async (term: string) => {
    console.log("fetch countries")
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

  const debouncedFetchCountries = useCallback(debounce((value: string) => fetchCountries(value), 300), []);
  
  useEffect(() => {
    debouncedFetchCountries(term)
  }, [term]);
  
  return { countries, addCountry, isLoading, error };
}