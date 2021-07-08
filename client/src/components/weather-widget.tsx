import { SyntheticEvent, useRef } from "react";
import useWeatherApi from "../hooks/use-weather-api";
import "../styles/weather-widget.scss";
import FlexContainer from "./flex-container";
import Loader from "./loader";
import WeatherInfo from "./weather-info";

const WeatherWidget = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [weatherData, setSearch] = useWeatherApi();

  const handleButton = (e: SyntheticEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value.trim();

    if (!value) {
      return;
    }

    if (value.length === 0) {
      return;
    }

    setSearch(value);
  };

  return (
    <FlexContainer
      className="weather-widget"
      flexDirection="column"
      alignItems="center"
    >
      <form className="weather-form">
        <input
          ref={inputRef}
          className="weather-form__input"
          type="text"
          placeholder="Введите город"
        ></input>
        <button className="weather-form__button" onClick={handleButton}>
          Показать погоду
        </button>
      </form>

      {weatherData.isLoading && <Loader />}
      {weatherData.data && <WeatherInfo info={weatherData.data} />}
      {weatherData.error && (
        <p className="weather-form__error">{weatherData.error}</p>
      )}
    </FlexContainer>
  );
};

export default WeatherWidget;
