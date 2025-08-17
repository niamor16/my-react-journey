export type Weather = {
  city: string;
  country: string;
  temp_C: string;
  temp_F: string;
};

export default function WeatherBloc({ weather, error }: { weather: Weather, error: string }) {
  if (error) {
    return <p>Error : {error}</p>;
  }

  if (!weather) {
    return <p>Aucune ville selectionnée</p>;
  }

  return (
    <div>
      <h2>
        {weather.city} ({weather.country})
      </h2>
      <p>
        Temp : {weather.temp_C}°C / {weather.temp_F}°F
      </p>
    </div>
  );
}