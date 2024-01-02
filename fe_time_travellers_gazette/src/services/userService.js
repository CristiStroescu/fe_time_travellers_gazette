import axios from "axios";

export const userService = {
  registerUser: async (username, password) => {
    try {
      const response = await axios.post("http://localhost:8080/user/save", {
        username: username,
        password: password,
      });
      return response;
    } catch (err) {
      alert(err);
      return null;
    }
  },

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
