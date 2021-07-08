import "../styles/menu-item-time.scss";
import CustomNavLink from "./custom-nav-link";
import { ReactComponent as Time3Icon } from "../assets/icons/time-3.svg";

const MenuItemTime = () => {
  return (
    <div className="menu-item-time">
      <div className="menu-item-time__icon">
        <Time3Icon />
      </div>
      <div className="menu-item-time__link">
        <CustomNavLink to="/time">Время</CustomNavLink>
      </div>
    </div>
  );
};

export default MenuItemTime;
