import "../styles/nav-link.scss";
import { Link } from "react-router-dom";

type Props = {
  to: string;
};

const CustomNavLink: React.FC<Props> = ({ to, children }) => (
  <Link className="nav-link" to={to}>
    {children}
  </Link>
);

export default CustomNavLink;
