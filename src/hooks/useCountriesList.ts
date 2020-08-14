import { useState, useEffect } from "react";
import axios from "../mocks/axios";
import { baseUrl } from "../constants";

export type CountryOption = {
    value: string
    label: string
}

export const useCountriesList = (term: string) => {
    const [countries, setCountries] = useState<CountryOption[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
   
    useEffect(() => {
      const fetchData = async () => {
        setError(null);
        setIsLoading(true);
   
        try {
          const result = await axios.get(baseUrl + "/countries", { params: { term } })
          setCountries(result.data)
        } catch (error) {
          setError(error);
        }
   
        setIsLoading(false);
      };
   
      fetchData();
    }, [term]);
   
    return { countries, isLoading, error };
}