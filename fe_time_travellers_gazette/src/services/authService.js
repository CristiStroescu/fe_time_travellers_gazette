export const AuthService = {
  isLoggedIn: () => {
    const userData =
      sessionStorage.getItem("username") || localStorage.getItem("username");

    return !!userData;
  },
};
