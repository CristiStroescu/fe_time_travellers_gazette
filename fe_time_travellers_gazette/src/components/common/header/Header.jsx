import { TITLE } from "../../../constants/constants";
import styles from "./Header.module.css";
import logo from "../../../assets/img/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { ABOUT, CONTACT, HOMEPAGE, LOGIN } from "../../../constants/routes";

function Header() {
  const title = TITLE;
  const username =
    sessionStorage.getItem("username") || localStorage.getItem("username");
  const navigate = useNavigate();

  const handleLogoutUser = () => {
    localStorage.removeItem("username");
    sessionStorage.removeItem("username");
    navigate(LOGIN);
  };

  return (
    <header>
      <div className={styles.header}>
        <NavLink className={styles["nav-link-title"]} to={HOMEPAGE}>
          <div className={styles.title}>
            <img src={logo}></img>
            <h2>{title}</h2>
          </div>
        </NavLink>
        <div className={styles.right}>
          <h5>{username}</h5>
          <button className={styles["logout-btn"]} onClick={handleLogoutUser}>
            Log Out
          </button>
        </div>
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
