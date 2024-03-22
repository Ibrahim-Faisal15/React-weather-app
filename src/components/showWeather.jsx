import { useContext } from "react";
import { context } from "../store/store";

export default function WeatherShower() {
  let { weatherData } = useContext(context);

  if (
    (!weatherData || !weatherData.city,
    !weatherData || !weatherData.temperature,
    !weatherData || !weatherData.description,
    !weatherData || !weatherData.feelsLike,
    !weatherData || !weatherData.humidity)
  ) {
    return <div>Loading...</div>;
  }

  const { city, temperature, description, feelsLike, humidity } = weatherData;

  return (
    <>
      <center class=" weather_card">
        <div className="city">{`City: ${city}`}</div>
        <div className="temperature">{`Temperature: ${temperature}`}</div>
        <div className="description">{`Description: ${description}`}</div>
        <div className="feelsLike">{`Feels Like: ${feelsLike}`}</div>
        <div className="humidity">{`Humidity: ${humidity}%`}</div>
      </center>
    </>
  );
}
