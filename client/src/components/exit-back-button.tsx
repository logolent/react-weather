import "../styles/exit-back-button.scss";
import FlexContainer from "./flex-container";
import { ReactComponent as ArrowIcon } from "../assets/icons/arrow.svg";

type Props = {
  title: string;
};

const ExitBackButton = ({ title }: Props) => {
  const handleClick = () => {
    window.history.back();
  };

  return (
    <FlexContainer className="exit-back-button" alignItems="center">
      <div className="exit-back-button__arrow" onClick={handleClick}>
        <ArrowIcon />
      </div>
      {title}
    </FlexContainer>
  );
};

export default ExitBackButton;
