import { useState, useEffect } from "react";
import axios from "../mocks/axios";
import { baseUrl } from "../constants";

type SelectOption = {
    value: string
    label: string
}

export const useCountriesList = () => {
    const [countries, setCountries] = useState<SelectOption[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
   
    useEffect(() => {
      const fetchData = async () => {
        setError(null);
        setIsLoading(true);
   
        try {
          const result = await axios.get(baseUrl + "/countries");
          setCountries(result.data);
        } catch (error) {
          setError(error);
        }
   
        setIsLoading(false);
      };
   
      fetchData();
    }, []);
   
    return { countries, isLoading, error };
}