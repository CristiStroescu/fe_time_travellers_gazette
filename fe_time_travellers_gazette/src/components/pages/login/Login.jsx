import styles from "./Login.module.css";

function Login() {
  return (
    <>
      <div className={styles["login-box"]}>
        <div className={styles["login-header"]}>
          <header>Login</header>
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
        <div className={styles.remember}>
          <section>
            <input type="checkbox" id="checkbox" className={styles.checkbox} />
            <label htmlFor="checkbox">Remember me</label>
          </section>
        </div>
        <div className={styles["input-submit"]}>
          <button className={styles["submit-btn"]}>Log In</button>
        </div>
        <div className={styles["sign-up-link"]}>
          <p>
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
