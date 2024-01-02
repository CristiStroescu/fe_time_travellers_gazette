import axios from "axios";

export const userService = {
  loginUser: async (username, password) => {
    try {
      const response = await axios.post("http://localhost:8080/user/login", {
        username: username,
        password: password,
      });
      return response;
    } catch (err) {
      alert(err);
      return null;
    }
  },
};
