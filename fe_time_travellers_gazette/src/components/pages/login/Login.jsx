import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { HOMEPAGE, SIGNUP } from "../../../constants/routes";
import Logo from "../../common/logo/Logo";
import { useState } from "react";
import { userService } from "../../../services/userService";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckboxChange = () => {
    rememberMe ? setRememberMe(false) : setRememberMe(true);
  };

  const handleLoginUser = async () => {
    if (username != "" && password != "") {
      const res = await userService.loginUser(username, password);
      switch (res.data.message) {
        case "Username does not exist":
          alert("Username does not exist");
          break;
        case "Login Failed":
          alert("Login Failed");
          break;
        case "Password not match":
          alert("Password not match");
          break;
        case "Login Success":
          rememberMe
            ? localStorage.setItem("username", username)
            : sessionStorage.setItem("username", username);
          navigate(HOMEPAGE);
          break;
        default:
          alert("Unknown error");
          break;
      }
    }
  };

  return (
    <>
      <Logo />
      <div className={styles["login-box"]}>
        <div className={styles["login-header"]}>
          <header>Log In</header>
        </div>
        <div className={styles["input-box"]}>
          <input
            type="text"
            className={styles["input-field"]}
            placeholder="Username"
            autoComplete="off"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className={styles["input-box"]}>
          <input
            type="password"
            className={styles["input-field"]}
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="off"
            required
          />
        </div>
        <div className={styles.remember}>
          <section>
            <input
              type="checkbox"
              id="checkbox"
              className={styles.checkbox}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="checkbox">Remember me</label>
          </section>
        </div>
        <div className={styles["input-submit"]}>
          <button className={styles["submit-btn"]} onClick={handleLoginUser}>
            Log In
          </button>
        </div>
        <div type="submit" className={styles["sign-up-link"]}>
          <p>
            Don't have an account? <NavLink to={SIGNUP}>Sign Up</NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
