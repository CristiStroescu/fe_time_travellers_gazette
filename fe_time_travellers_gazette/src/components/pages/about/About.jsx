import styles from "./About.module.css";
import { TITLE } from "../../../constants/constants";
import Header from "../../common/header/Header";

function About() {
  const title = TITLE;
  return (
    <>
      <Header />
      <div className={styles.heading}>
        <h1>About Us</h1>
        <p>Discover the Past: Exploring History Together</p>
      </div>
      <div className={styles.container}>
        <section className={styles.about}>
          <div className={styles["about-content"]}>
            <h2>Our Mission</h2>
            <p>
              Welcome to {title}, where history comes alive. Our love for the
              past fuels our dedication to unraveling the intricate layers of
              human civilization, events, and cultures that have shaped our
              world. We're not merely chroniclers of dates and facts; we're
              storytellers who weave narratives that transport you to bygone
              eras.
            </p>
            <p>
              History is a tapestry woven from the triumphs, struggles,
              innovations, and narratives of countless individuals and
              societies. Our team, comprising passionate historians,
              researchers, and writers, is committed to meticulously excavating
              these stories, breathing life into forgotten anecdotes, and
              shedding light on pivotal moments that have often remained in the
              shadows of mainstream historical accounts.
            </p>
            <p>
              Through our articles, we aim to present history as a vibrant
              mosaic, celebrating the diversity of human experiences across time
              and space. From the rise and fall of empires to the lives of
              unsung heroes, from the profound impact of cultural revolutions to
              the technological advancements that transformed societies, our
              goal is to make history engaging, accessible, and relevant to
              contemporary life.
            </p>
            <p>
              But our journey isn't solitary; it's a shared expedition with our
              readers. We're committed to fostering a community where
              discussions, debates, and shared enthusiasm for history thrive.
              Its not just about what we write; it's about the conversations our
              articles spark and the connections they forge among history
              enthusiasts worldwide.
            </p>
            <p>
              At {title}, we invite you to join us on this exhilarating voyage
              through time. Let's delve into the depths of the past, where every
              story is a gateway to understanding the complexities and beauty of
              our shared human history.
            </p>
            <p>Thank you for embarking on this historical odyssey with us!</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;
