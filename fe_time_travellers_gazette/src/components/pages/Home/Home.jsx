import Card from "../../common/card/Card";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { articleService } from "../../../services/articleService";

function Home() {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    (async () => {
      const arts = await articleService.getArticles();
      console.log(arts);
      setArticles(arts);
    })();
  }, []);

  if (articles === null) {
    return <div className={styles.wrapper}>Loading articles...</div>;
  }

  return (
    <>
      <main className={styles.page}>
        {articles.map((article) => (
          <Card
            key={article.id}
            id={article.id}
            title={article.title}
            subtitle={article.subtitle}
            imagePath1={article.imagePath1}
          />
        ))}
      </main>
    </>
  );
}

export default Home;
