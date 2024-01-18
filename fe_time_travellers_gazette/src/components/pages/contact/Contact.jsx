import { EMAIL } from "../../../constants/constants";
import styles from "./Contact.module.css";
import EmailIcon from "@mui/icons-material/Email";
import Table from "react-bootstrap/Table";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

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
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Where can you find us?</th>
                    <th>link</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>e-mail</td>
                    <td>
                      <EmailIcon className={styles.icon} />
                      <a href={`mailto:${email}`}>{email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Instagram</td>
                    <td>
                      <InstagramIcon className={styles.icon} />
                      <a
                        href="https://www.instagram.com/timetravellersgazette/"
                        target="_blank"
                      >
                        @timetravellersgazette
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>X/Twitter</td>
                    <td>
                      <TwitterIcon className={styles.icon} />
                      <a
                        href="https://twitter.com/TimeTGazette"
                        target="_blank"
                      >
                        @TimeTGazette
                      </a>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Contact;
