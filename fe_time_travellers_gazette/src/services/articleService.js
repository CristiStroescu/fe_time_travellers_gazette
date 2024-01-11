import { ARTICLES } from "../constants/constants";

export const receiveArticle = (id) => {
  const article = ARTICLES.find((article) => article.id === id);

  return article || null;
};
