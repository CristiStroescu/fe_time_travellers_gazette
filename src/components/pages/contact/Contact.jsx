import { EMAIL } from "../../../constants/constants";
import styles from "./Contact.module.css";
import EmailIcon from "@mui/icons-material/Email";
import Header from "../../common/header/Header";

function Contact() {
  const email = EMAIL;
  return (
    <>
      <Header />
      <section className={styles.contact}>
        <div className={styles.container}>
          <h2>Contact Us</h2>
          <div className={styles["contact-info"]}>
            <h3>Contact Information</h3>
            <p>
              <EmailIcon className={styles.icon} />
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
