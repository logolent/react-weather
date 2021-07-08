import "../styles/time-widget.scss";
import { useEffect, useState } from "react";
import FlexContainer from "./flex-container";

const getCurrentTimeFormatted = (): string => {
  return new Date().toLocaleTimeString("ru-RU");
};

const TimeWidget = () => {
  const [time, setTime] = useState<string>(getCurrentTimeFormatted());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTimeFormatted());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <FlexContainer
      className="time-widget"
      justifyContent="center"
      alignItems="center"
    >
      {time}
    </FlexContainer>
  );
};

export default TimeWidget;
