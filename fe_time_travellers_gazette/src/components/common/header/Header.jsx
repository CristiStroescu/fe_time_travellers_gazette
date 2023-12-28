import { TITLE } from "../../../constants/constants";
import styles from "./Header.module.css";
import logo from "../../../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { ABOUT, CONTACT, HOMEPAGE } from "../../../constants/routes";

function Header() {
  const title = TITLE;
  return (
    <header>
      <div className={styles.title}>
        <h1>{title}</h1>
        <img src={logo}></img>
      </div>
      <nav className={styles.navbar}>
        <NavLink className={styles["nav-link-item"]} to={HOMEPAGE}>
          Home
        </NavLink>
        <NavLink className={styles["nav-link-item"]} to={ABOUT}>
          About
        </NavLink>
        <NavLink className={styles["nav-link-item"]} to={CONTACT}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
