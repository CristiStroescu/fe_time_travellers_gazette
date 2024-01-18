import styles from "./Card.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link to={props.id.toString()}>
      <div className={styles.card}>
        <img
          className={styles["card-image"]}
          src={props.imagePath1}
          alt="image"
        />
        <h2 className={styles["card-title"]}>{props.title}</h2>
        <p className={styles["card-subtitle"]}>{props.subtitle}</p>
      </div>
    </Link>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imagePath1: PropTypes.string,
};

Card.defaultProps = {
  title: "No Title",
  subtitle: "No Subtitle",
  imagePath1: "",
};

export default Card;
