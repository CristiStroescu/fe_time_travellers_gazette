import { ARTICLES } from "../constants/constants";

export const receiveArticle = (id) => {
  console.log(id);
  const article = ARTICLES.find((article) => article.id == id);
  console.log(article);

  return article || null;
};
