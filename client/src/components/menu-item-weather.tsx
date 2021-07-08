import "../styles/menu-item-weather.scss";
import CustomNavLink from "./custom-nav-link";
import { ReactComponent as CloudIcon } from "../assets/icons/cloud.svg";
import { ReactComponent as SunIcon } from "../assets/icons/sun.svg";

const MenuItemWeather = () => {
  return (
    <div className="menu-item-weather">
      <div className="menu-item-weather__icons">
        <div className="icon _sun">
          <SunIcon />
        </div>
        <div className="icon _cloud">
          <CloudIcon />
        </div>
      </div>
      <div className="menu-item-weather__link">
        <CustomNavLink to="/weather">Погода</CustomNavLink>
      </div>
    </div>
  );
};

export default MenuItemWeather;
