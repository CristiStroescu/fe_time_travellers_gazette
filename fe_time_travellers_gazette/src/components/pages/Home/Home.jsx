import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import Card from "../../common/card/Card";
import { useEffect, useState } from "react";
import { ARTICLES } from "../../../constants/constants";
import styles from "./Home.module.css";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const arts = ARTICLES;
    setArticles(arts);
  }, []);

  return (
    <>
      <main className={styles.page}>
        {articles.map((article) => (
          <Card
            key={article.id}
            title={article.title}
            subtitle={article.subtitle}
            imagePath={article.imagePath}
          />
        ))}
      </main>
    </>
  );
}

export default Home;
