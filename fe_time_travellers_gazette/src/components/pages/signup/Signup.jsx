import { useState } from "react";
import { LOGIN } from "../../../constants/routes";
import Logo from "../../common/logo/Logo";
import styles from "./Signup.module.css";
import { NavLink } from "react-router-dom";

import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function save(event) {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8080/user/save", {
        username: username,
        password: password,
      });
      alert("User reg. success");
    } catch (error) {
      alert(error);
    }
  }

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
            autoComplete="off"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
          />
        </div>
        <div className={styles["input-submit"]}>
          <button type="submit" className={styles["submit-btn"]} onClick={save}>
            Sign Up
          </button>
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
