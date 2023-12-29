import { EMAIL } from "../../../constants/constants";
import styles from "./Contact.module.css";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  const email = EMAIL;
  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <h2>Contact Us</h2>
        <div className={styles["contact-wrapper"]}>
          <div className={styles["contact-form"]}>
            <h3>Send us a message</h3>
            <form>
              <div className={styles["form-group"]}>
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className={styles["form-group"]}>
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className={styles["form-group"]}>
                <input type="message" placeholder="Message" />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
          <div className={styles["contact-info"]}>
            <h3>Contact Information</h3>
            <p>
              <EmailIcon className={styles.icon} />
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
