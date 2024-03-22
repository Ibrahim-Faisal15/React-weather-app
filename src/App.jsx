import "./App.css";
import { ContextProvider } from "./store/store";
import Footer from "./components/footer";
import Header from "./components/header";
import Search from "./components/search";
import WeatherShower from "./components/showWeather";
import { useState } from "react";

function App() {
  const [loading, setloading] = useState(false);

  return (
    <ContextProvider>
      <Header></Header>
      <Search loading={setloading}></Search>
      <div
        className="Unique"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {loading === true && <WeatherShower></WeatherShower>}
      </div>
    </ContextProvider>
  );

  console.log(loading);
}

export default App;

///understand why the app is not even working and aftwewards make a fetch request
