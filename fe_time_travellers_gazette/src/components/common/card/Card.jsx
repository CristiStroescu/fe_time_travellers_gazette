import styles from "./Card.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Card(props) {
  console.log(props.imagePath);
  return (
    <Link to={props.id}>
      <div className={styles.card}>
        <img
          className={styles["card-image"]}
          src={props.imagePath}
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
  imagePath: PropTypes.string,
};

Card.defaultProps = {
  title: "No Title",
  subtitle: "No Subtitle",
  imagePath: "",
};

export default Card;
