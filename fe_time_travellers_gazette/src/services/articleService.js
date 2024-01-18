// import { ARTICLES } from "../constants/constants";

// export const receiveArticle = (id) => {
//   console.log(id);
//   const article = ARTICLES.find((article) => article.id == id);
//   console.log(article);

//   return article || null;
// };

import axios from "axios";
import apiClient from "./apiClientService";

export const articleService = {
  getArticles: async () => {
    try {
      const response = await apiClient().get("http://localhost:8080/article");
      console.log(response);
      return response.data;
    } catch (err) {
      alert(err);
      return null;
    }
  },
  getArticleById: async (id) => {
    try {
      console.log(id);
      const response = await apiClient().get(
        `http://localhost:8080/article/${id}`
      );
      console.log(response);
      return response.data;
    } catch (err) {
      alert(err);
      return null;
    }
  },
};
