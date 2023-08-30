import logo from "../../../assets/logo.svg";
import { HashLink as Link } from "react-router-hash-link";

export const Brand = () => {
  return (
    <div className="brand">
      <Link className="brand__link" to="/#top">
        <img className="brand__icon" alt="logo-img" src={logo} />
        <span className="brand__title">Organick</span>
      </Link>
    </div>
  );
};
