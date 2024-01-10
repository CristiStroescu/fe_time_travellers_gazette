import { EMAIL } from "../../../constants/constants";
import styles from "./Contact.module.css";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  const email = EMAIL;
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h1>Contact Us</h1>
        </div>
        <div className={styles.container}>
          <section className={styles.contact}>
            <div className={styles["contact-content"]}>
              <h2>Contact Information</h2>
              <p>
                <EmailIcon className={styles.icon} />
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Contact;
