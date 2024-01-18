import styles from "./Article.module.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { receiveArticle } from "../../../services/articleService";
import Carousel from "../../common/carousel/Carousel";

function Article() {
  const [article, setArticle] = useState(null);
  const [slides, setSlides] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const article = receiveArticle(id);
    setArticle(article);
    setSlides(article.slides);
  }, [id]);

  if (article === null) {
    return <div className={styles.wrapper}>Loading article...</div>;
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.heading}>
        <h1>{article.title}</h1>
        <p>{article.subtitle}</p>
      </div>
      <div className={styles.container}>
        <section className={styles.article}>
          <div className={styles["article-content"]}>
            {/* <img src={article.imagePath} alt="image" /> */}
            <Carousel data={slides} />
            <p>{article.article}</p>
          </div>
          <button className={styles["back-btn"]} onClick={() => navigate(-1)}>
            Back
          </button>
        </section>
      </div>
    </div>
  );
}

export default Article;
