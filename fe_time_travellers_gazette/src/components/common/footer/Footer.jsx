import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { TITLE } from "../../../constants/constants";
import styles from "./Footer.module.css";

function Footer() {
  const title = TITLE;
  return (
    <footer>
      <div className={styles.rows}>
        <p className={styles.rows}>Follow us on social media:</p>
        <a
          href="https://www.instagram.com/timetravellersgazette/"
          target="_blank"
        >
          <InstagramIcon className={styles.icon} />
        </a>

        <a href="https://twitter.com/TimeTGazette" target="_blank">
          <TwitterIcon className={styles.icon} />
        </a>
      </div>
      <p className={styles.rows}>
        &copy; {new Date().getFullYear()} {title}
      </p>
    </footer>
  );
}

export default Footer;
