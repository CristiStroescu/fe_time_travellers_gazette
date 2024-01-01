import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { SIGNUP } from "../../../constants/routes";
import Logo from "../../common/logo/Logo";
import axios from "axios";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();
    try {
      await axios
        .post("http://localhost:8080/user/login", {
          username: username,
          password: password,
        })
        .then(
          (res) => {
            console.log(res.data);
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
                navigate("/");
                break;
              default:
                alert("Unknown error");
                break;
            }
          },
          (fail) => {
            console.error(fail);
          }
        );
    } catch (err) {
      alert(err);
    }
  }

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
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            required
          />
        </div>
        <div className={styles["input-box"]}>
          <input
            type="password"
            className={styles["input-field"]}
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            autoComplete="off"
            required
          />
        </div>
        <div className={styles.remember}>
          <section>
            <input type="checkbox" id="checkbox" className={styles.checkbox} />
            <label htmlFor="checkbox">Remember me</label>
          </section>
        </div>
        <div className={styles["input-submit"]}>
          <button className={styles["submit-btn"]} onClick={login}>
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
