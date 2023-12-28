import styles from "./Card.module.css";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <div className={styles.card}>
      <img src={props.imagePath}></img>
      <h2 className={styles["card-title"]}>{props.title}</h2>
      <p className={styles["card-subtitle"]}>{props.subtitle}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath: PropTypes.string,
};

Card.defaultProps = {
  title: "No Title",
  subtitle: "No Subtitle",
  imagePath: "",
};

export default Card;
