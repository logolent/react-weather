import { WeatherApiResponse } from "../interfaces/weather-api-response.interface";
import "../styles/weather-info.scss";

interface WeatherInfoProps {
  info: WeatherApiResponse;
}

interface WeatherInfoItemProps {
  title: string;
  value: string;
}

const WeatherInfoItem: React.FC<WeatherInfoItemProps> = (props) => (
  <div className="weather-info-item">
    <p className="weather-info-item__title text _medium">{props.title}</p>
    <p className="weather-info-item__value text _normal">{props.value}</p>
  </div>
);

const WeatherInfo: React.FC<WeatherInfoProps> = ({
  info,
}: WeatherInfoProps) => (
  <div className="weather-info">
    <p className="weather-info__title text _header">
      {info.city}, {info.country} ({info.tempCelsius}&deg;)
    </p>
    <div className="weather-info__items">
      <WeatherInfoItem
        title="Ощущается как"
        value={`${info.feelsLikeCelsius}\u00b0`}
      />
      <WeatherInfoItem title="Ветер" value={`${info.windKph} км/ч`} />
    </div>
  </div>
);

export default WeatherInfo;
