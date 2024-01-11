import styles from "./Article.module.css";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { receiveArticle } from "../../../services/articleService";

function Article() {
  const [article, setArticle] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const article = receiveArticle(id);
    setArticle(article);
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
        <section className={styles.about}>
          <div className={styles["about-content"]}>
            <img src={article.imagePath} alt="image" />
            <p>{article.article}</p>
          </div>
        </section>
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Article;
