import React, { createContext, useState } from "react";

const context = createContext({
  weatherProvider: () => {},
  weatherData: null,
});

function ContextProvider({ children }) {
  const [weatherData, setData] = useState(null);

  async function weatherHandler(cityName) {
    let CityName = cityName;
    let key = "98cfd0e1781a771fd5daeaf714535f22";
    let requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${key}`;

    let response = await fetch(requestURL);
    let response_JSON = await response.json();
    const weatherData = {
      city: cityName,
      temperature: response_JSON.main.temp,
      description: response_JSON.weather[0].description,
      feelsLike: response_JSON.main.feels_like,
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
