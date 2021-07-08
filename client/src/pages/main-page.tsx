import "../styles/main-page.scss";
import FlexContainer from "../components/flex-container";
import MenuItemTime from "../components/menu-item-time";
import MenuItemWeather from "../components/menu-item-weather";

const MainPage = () => (
  <FlexContainer
    className="main-page"
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <FlexContainer className="main-page__links" flexDirection="column">
      <MenuItemTime />
      <MenuItemWeather />
    </FlexContainer>
  </FlexContainer>
);

export default MainPage;
