import React, { useContext, useRef } from "react";
import { context } from "../store/store";

export default function Search({ loading }) {
  const { weatherHandler } = useContext(context);
  const cityRef = useRef();
  // console.log(loading);

  const handleCityName = (event) => {
    event.preventDefault();
    let cityName = cityRef.current.value;
    weatherHandler(cityName);
    loading(true);
    loading(true);
  };

  return (
    <>
      <div className="input-group input-group-lg main">
        <button
          className="input-group-text"
          id="inputGroup-sizing-lg"
          onClick={handleCityName}
        >
          Search
        </button>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          ref={cityRef}
        ></input>
      </div>{" "}
    </>
  );
}
