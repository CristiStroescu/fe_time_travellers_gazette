import { TITLE } from "../../../constants/constants";
import styles from "./Logo.module.css";
import logo from "../../../assets/img/logo.png";

function Logo() {
  const title = TITLE;
  return (
    <>
      <div className={styles.title}>
        <img src={logo}></img>
        <h1>{title}</h1>
      </div>
    </>
  );
}

export default Logo;
