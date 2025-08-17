import { useEffect, useState } from "react";
import WeatherBloc, {type Weather} from "./WeatherBloc";
import Search from "./Search";

type weatherRequest = {
  city: string | null;
  coordinates: coordinates | null;
};

type coordinates = {
  lat: number;
  lon: number;
};

export default function WeatherApp()
{
  function getWeather(params: weatherRequest) {
    console.log("params", params);

    const search = params.city
      ? params.city
      : params.coordinates?.lat + "," + params.coordinates?.lon;
    setIsLoading(true);
    setError(null);
    fetch(`https://wttr.in/${search}?format=j1`)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error(res.status + " " + res.statusText);
      })
      .then((json) => {
        const weather: Weather = {
          city: json.nearest_area[0].areaName[0].value,
          country: json.nearest_area[0].country[0].value,
          temp_C: json.current_condition[0].temp_C,
          temp_F: json.current_condition[0].temp_F,
        };

        setWeather(weather);
        console.log(weather);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setIsLoading(false);
        setWeather(null);
      });
  }

  function onSearch(city: string) {
    const request: weatherRequest = {
      city: city,
      coordinates: null,
    };
    getWeather(request);
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords: coordinates = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          const request: weatherRequest = {
            city: null,
            coordinates: coords,
          };
          getWeather(request);
        },
        (err) => console.error("Erreur :", err.message)
      );
    }
  }, []);

  const [weather, setWeather] = useState<Weather | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  //TODO SCSS

  return (
    <div>
      <h1>Weather App</h1>

      <Search onSearch={onSearch} isLoading={isLoading} />
      <WeatherBloc weather={weather} error={error} />
    </div>
  );
}