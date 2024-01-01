import { TITLE } from "../../../constants/constants";
import styles from "./Logo.module.css";
import logo from "../../../assets/img/logo.png";

function Logo() {
  const title = TITLE;
  return (
    <>
      <div className={styles.title}>
        <h1>{title}</h1>
        <img src={logo}></img>
      </div>
    </>
  );
}

export default Logo;
