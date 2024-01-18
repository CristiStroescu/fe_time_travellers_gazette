import axios from "axios";

const apiClient = (contentType) => {
  const headers = {
    "Content-Type": contentType ? "multipart/form-data" : "application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  };
  return axios.create({
    baseURL: "",
    headers,
  });
};
export default apiClient;
