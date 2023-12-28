import Header from "../../common/header/Header";
import Footer from "../../common/footer/Footer";
import Card from "../../common/card/Card";
import { useEffect, useState } from "react";
import { ARTICLES } from "../../../constants/constants";
import styles from "./Homepage.module.css";

function Homepage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const arts = ARTICLES;
    setArticles(arts);
  }, []);

  return (
    <>
      <Header />
      <main className="page">
        {articles.map((article) => (
          <Card
            key={article.id}
            title={article.title}
            subtitle={article.subtitle}
            imagePath={article.imagePath}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default Homepage;
