import { LOGIN } from "../../../constants/routes";
import Logo from "../../common/logo/Logo";
import styles from "./Signup.module.css";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <>
      <Logo />
      <div className={styles["signup-box"]}>
        <div className={styles["signup-header"]}>
          <header>Sign Up</header>
        </div>
        <div className={styles["input-box"]}>
          <input
            type="text"
            className={styles["input-field"]}
            placeholder="Username"
            autoComplete="off"
            required
          />
        </div>
        <div className={styles["input-box"]}>
          <input
            type="password"
            className={styles["input-field"]}
            placeholder="Password"
            autoComplete="off"
            required
          />
        </div>
        <div className={styles["input-submit"]}>
          <button className={styles["submit-btn"]}>Sign Up</button>
        </div>
        <div className={styles["log-in-link"]}>
          <p>
            Already have an account? <NavLink to={LOGIN}>Log In</NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
