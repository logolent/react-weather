import "./styles/main.scss";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/main-page";
import TimePage from "./pages/time-page";
import WeatherPage from "./pages/weather-page";
import FlexContainer, { FlexContainerProps } from "./components/flex-container";

const App = () => {
  const rootContainerStyles: FlexContainerProps = {
    justifyContent: "center",
    alignItems: "center",
  };

  const mainContainerStyles: FlexContainerProps = {
    flexDirection: "column",
  };

  const contentStyles: FlexContainerProps = {
    flexDirection: "column",
  };

  return (
    <FlexContainer className="root-container" {...rootContainerStyles}>
      <FlexContainer className="app-container" {...mainContainerStyles}>
        <FlexContainer className="app-container__content" {...contentStyles}>
          <Switch>
            <Route exact path="/time">
              <TimePage />
            </Route>
            <Route exact path="/weather">
              <WeatherPage />
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default App;
