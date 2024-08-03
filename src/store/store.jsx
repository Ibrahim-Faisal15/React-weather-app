import React, { createContext, useState } from "react";

const context = createContext({
  weatherProvider: () => { },
  weatherData: null,
});

function ContextProvider({ children }) {
  const [weatherData, setData] = useState(null);

  async function weatherHandler(cityName) {
    let CityName = cityName;
    let key = null
    let requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${key}`;

    let response = await fetch(requestURL);
    let response_JSON = await response.json();
    const weatherData = {
      city: cityName,
      temperature: Math.round(response_JSON.main.temp - 273.15),
      description: response_JSON.weather[0].description,
      feelsLike: Math.round(response_JSON.main.feels_like - 273.15),
      humidity: response_JSON.main.humidity,
    };

    setData(weatherData);
  }

  return (
    <context.Provider
      value={{
        weatherHandler,
        weatherData,
      }}
    >
      {children}
    </context.Provider>
  );
}

export { context, ContextProvider };
