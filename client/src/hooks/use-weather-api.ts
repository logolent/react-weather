import { useEffect, useState } from "react";
import { WeatherApiResponse } from "../interfaces/weather-api-response.interface";

interface weatherHookData {
  data: WeatherApiResponse | undefined;
  isLoading: boolean;
  error: string;
}

const useWeatherApi = (): [weatherHookData, (query: string) => void] => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<WeatherApiResponse>();

  useEffect(() => {
    const fetchData = async () => {
      if (search.trim().length === 0) {
        return;
      }

      setError("");
      setIsLoading(true);

      try {
        const query = `/api/weather?search=${search}`;
        const res = await fetch(query, { method: "GET" });
        const json = await res.json();

        if (!json.location) {
          setError(`По запросу "${search}" данные не найдены`);
          setData(undefined);
        } else {
          const data: WeatherApiResponse = {
            city: json.location?.name,
            country: json.location?.country,
            tempCelsius: json.current?.temp_c,
            feelsLikeCelsius: json.current?.feelslike_c,
            windKph: json.current?.wind_kph,
          };
          setData(data);
        }
      } catch (e) {
        setError(`Невозможно получить данные`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search]);

  return [{ data, isLoading, error }, setSearch];
};

export default useWeatherApi;
