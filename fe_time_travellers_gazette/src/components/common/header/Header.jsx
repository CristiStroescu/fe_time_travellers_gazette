import { TITLE } from "../../../constants/constants";
import styles from "./Header.module.css";
import logo from "../../../assets/img/logo.png";

function Header() {
  const title = TITLE;
  return (
    <header>
      <div className={styles.title}>
        <h1>{title}</h1>
        <img src={logo}></img>
      </div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
